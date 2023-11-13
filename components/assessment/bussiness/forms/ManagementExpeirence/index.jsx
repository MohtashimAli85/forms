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

function ManagementExperience({ nextStep, data, updateForm }) {
  const form = useForm({
    defaultValues: data.management_experience,
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data) => {
    updateForm(data, 'management_experience');
    nextStep();
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
          <div className='col-span-2 lg:col-span-3 grid place-content-end'>
            <Button type='submit'>Next Step</Button>
          </div>
        </form>
      </Form>
    </>
  );
}
export default ManagementExperience;
