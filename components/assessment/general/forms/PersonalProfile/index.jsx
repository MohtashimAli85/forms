import YesNoRadio from '@/components/ui/Radios/YesNoRadio';
import AgeSelector from '@/components/ui/Selectors/AgeSelector';
import ChildrenSelector from '@/components/ui/Selectors/ChildrenSelector';
import CountrySelect from '@/components/ui/Selectors/CountrySelect';
import MaritalSelector from '@/components/ui/Selectors/MaritalSelector';
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
import { memo } from 'react';
const Selectors = {
  nationality: CountrySelect,
  current_country: CountrySelect,
  age: AgeSelector,
  marital_status: MaritalSelector,
  number_of_children: ChildrenSelector
};
const Selector = ({ name, field, label }) => {
  const Select = Selectors[name];
  if (Select)
    return (
      <>
        <Select field={field} label={label} />
      </>
    );
  return <></>;
};
function ProfileForm({ nextStep, data, updateForm }) {
  const form = useForm({
    defaultValues: data.personal_profile,
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data) => {
    console.log(data);
    updateForm(data, 'personal_profile');
    nextStep();
  };

  // Define the form fields to map over them

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={
          'space-y-3 lg:space-y-0 lg:grid  lg:grid-cols-3 gap-3 animate-accordion-down'
        }
      >
        {formFields.map(({ name, label, type }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  {type === 'select' ? (
                    <Selector name={name} field={field} label={label} />
                  ) : type === 'radio' ? (
                    <>
                      <YesNoRadio field={field} label={label} />
                    </>
                  ) : (
                    <>
                      <FormLabel>{label}</FormLabel>

                      <Input type={type} {...field} />
                    </>
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <div className='col-span-2 grid place-content-end'>
          <Button type='submit'>Next Step</Button>
        </div>
      </form>
    </Form>
  );
}
export default memo(ProfileForm);
