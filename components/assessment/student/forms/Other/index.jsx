// import CountrySelect from '@/components/ui/Selectors/CountrySelect';
import YesNoRadio from '@/components/ui/Radios/YesNoRadio';
import SubmitBtn from '@/components/ui/SubmitBtn';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { formFields, formSchema } from './utils';
import useSubmitForm from '@/hooks/useSubmitForm';

function Other({ nextStep, data, updateForm }) {
  const url = '/study_visa';
  const { mutate, isPending } = useSubmitForm(url);
  const form = useForm({
    defaultValues: data.other,
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (others) => {
    const available_programs = Object.keys(data)
      .filter((key) => data[key] === true)
      .join(', ');
    const payload = {
      ...data.personal_profile,
      available_programs,
      ...data.canadian_Language_proficiency,
      ...others
    };
    mutate(payload);
    updateForm(others, 'other');
  };
  return (
    <>
      <p className='text-base xl:text-xl my-2'></p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={'space-y-3 '}
          aria-disabled={!!data?.status ? 'true' : 'false'}
        >
          {formFields.map(({ name, label, type }) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <YesNoRadio field={field} label={label} />
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
          <FormField
            control={form.control}
            name={'comments'}
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormControl>
                  <>
                    <FormLabel>Questions and comments</FormLabel>
                    <Textarea placeholder='Comments' {...field} />
                  </>
                </FormControl>
              </FormItem>
            )}
          />
          <div className='col-span-2 lg:col-span-3 grid place-content-end'>
            <SubmitBtn isLoading={isPending} />
          </div>
        </form>
      </Form>
    </>
  );
}
export default Other;
