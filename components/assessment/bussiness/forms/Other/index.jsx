// import CountrySelect from '@/components/ui/Selectors/CountrySelect';
import AmountSelector from '@/components/ui/Selectors/AmountSelector';
import CurrencySelector from '@/components/ui/Selectors/CurrencySelector';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { formFields, formSchema } from './utils';
import YesNoRadio from '@/components/ui/Radios/YesNoRadio';
import { Textarea } from '@/components/ui/textarea';
import useSubmitForm from '@/hooks/useSubmitForm';
import SubmitBtn from '@/components/ui/SubmitBtn';

function Other({ nextStep, data, updateForm }) {
  const url = '/business_immigration';
  const { mutate, isPending } = useSubmitForm(url);
  const form = useForm({
    defaultValues: data.other,
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (other) => {
    const payload = {
      ...data.personal_profile,
      ...data.personal_net_worth,
      ...data.management_experience,
      ...other
    };
    console.log(payload);
    mutate(payload);
    updateForm(other, 'other');
  };
  return (
    <>
      <p className='text-base xl:text-xl my-2'>
        Your management experience may have been gained in a private or public
        business, international agency, government or government department,
        professional practice, or farming.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={'space-y-3 '}>
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
