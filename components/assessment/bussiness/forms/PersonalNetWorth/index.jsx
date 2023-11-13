// import CountrySelect from '@/components/ui/Selectors/CountrySelect';
import AmountSelector from '@/components/ui/Selectors/AmountSelector';
import CurrencySelector from '@/components/ui/Selectors/CurrencySelector';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { memo } from 'react';
import { useForm } from 'react-hook-form';
import { formFields, formSchema } from './utils';

function ProfileForm({ nextStep, data, updateForm }) {
  const form = useForm({
    defaultValues: data.personal_net_worth,
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data) => {
    updateForm(data, 'personal_net_worth');
    nextStep();
  };
  return (
    <>
      <p className='text-base xl:text-xl my-2'>
        Your Personal Net Worth is the current value of all the assets (e.g.
        properties, investments, stocks, bonds, bank accounts) that you (and
        your spouse/common-law partner, if applicable) personally own, MINUS the
        current value of all your combined personal liabilities (e.g. mortgages,
        loans, credit card balances).
        <br />
        <br /> Please be sure to include your share of the value of any
        businesses that you own.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={'space-y-3 '}>
          {formFields.map(({ name, label, type }) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem className='flex-1'>
                  <FormControl>
                    {name === 'currency' ? (
                      <>
                        <CurrencySelector field={field} label={label} />
                      </>
                    ) : (
                      <>
                        <AmountSelector
                          field={field}
                          label={label}
                          watch='currency'
                        />
                      </>
                    )}
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
export default memo(ProfileForm);
