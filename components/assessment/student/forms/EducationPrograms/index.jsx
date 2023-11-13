// import CountrySelect from '@/components/ui/Selectors/CountrySelect';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input'; // Assumed imports
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { formFields, formSchema } from './utils';
import { Checkbox } from '@/components/ui/checkbox';

function EducationPrograms({ nextStep, data, updateForm }) {
  const form = useForm({
    defaultValues: { programs: data.programs },
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data) => {
    updateForm(data.programs, 'programs');
    nextStep();
  };
  const error = form.control._formState.errors.programs?.root?.message;
  // Define the form fields to map over them

  return (
    <Form {...form}>
      <>
        <FormMessage className='my-3'>{error}</FormMessage>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={
            'space-y-3 lg:space-y-0 lg:grid  lg:grid-cols-3 gap-3 animate-accordion-down'
          }
        >
          {formFields.map(({ name, label, type }) => {
            return (
              <FormField
                key={name}
                control={form.control}
                name={name}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <div className='flex gap-1'>
                          <Checkbox
                            id={name}
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />

                          <FormLabel htmlFor={name}>{label}</FormLabel>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            );
          })}
          <div className='col-span-2 lg:col-span-3 grid place-content-end'>
            <Button type='submit'>Next Step</Button>
          </div>
        </form>
      </>
    </Form>
  );
}

export default EducationPrograms;
