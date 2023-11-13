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
import dynamic from 'next/dynamic';
import { memo } from 'react';
import { useForm } from 'react-hook-form';
import { formFields, formSchema } from './utils';
const CountrySelect = dynamic(
  () => import('@/components/ui/Selectors/CountrySelect'),
  { ssr: false }
);
const Selectors = {
  nationality: CountrySelect,
  current_country: CountrySelect
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
    updateForm(data, 'personal_profile');
    nextStep();
  };
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
        <div className='col-span-2 lg:col-span-3 grid place-content-end'>
          <Button type='submit'>Next Step</Button>
        </div>
      </form>
    </Form>
  );
}
export default memo(ProfileForm);
