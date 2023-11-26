// import CountrySelect from '@/components/ui/Selectors/CountrySelect';
import YesNoRadio from '@/components/ui/Radios/YesNoRadio';
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
import SubmitBtn from '@/components/ui/SubmitBtn';

function Other({ nextStep, data, updateForm }) {
  const url = '/family_sponsorship';
  const { mutate, isPending } = useSubmitForm(url);
  const form = useForm({
    defaultValues: data.other,
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (others) => {
    const payload = {
      ...data.personal_profile,
      ...data.relative_information,
      ...others
    };
    console.log(payload);
    mutate(payload);
    updateForm(others, 'other');
  };
  return (
    <>
      <p className='text-base xl:text-xl my-2'></p>
      <Form {...form}>
        <form
          aria-disabled={!!data?.status ? 'true' : 'false'}
          onSubmit={form.handleSubmit(onSubmit)}
          className={'space-y-3 '}
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
