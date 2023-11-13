// import CountrySelect from '@/components/ui/Selectors/CountrySelect';
import YesNoRadio from '@/components/ui/Radios/YesNoRadio';
import AmountSelector from '@/components/ui/Selectors/AmountSelector';
import CurrencySelector from '@/components/ui/Selectors/CurrencySelector';
import Selector from '@/components/ui/Selectors/Selector';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import useSubmitForm from '@/hooks/useSubmitForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { formFields, formSchema, list, subFields } from './utils';
import SubmitBtn from '@/components/ui/SubmitBtn';

function Others({ nextStep, data, updateForm }) {
  const url = '/general_immigration';
  const { mutate, isPending } = useSubmitForm(url);
  const form = useForm({
    defaultValues: data.others,
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (others) => {
    const payload = {
      ...data.personal_profile,
      ...data.education_training,
      ...data.work_experience,
      ...data.canadian_Language_proficiency,
      ...others
    };
    console.log(payload);
    mutate(payload);
    updateForm(others, 'others');
    // nextStep();
  };

  // Define the form fields to map over them

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={'space-y-3  animate-accordion-down'}
      >
        {formFields.map(({ name, label, type }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  {type === 'radio' ? (
                    <>
                      <FormLabel>{label}</FormLabel>
                      <YesNoRadio field={field} />
                    </>
                  ) : type === 'select' ? (
                    <Selector field={field} label={label} list={list[name]} />
                  ) : (
                    ''
                  )}
                </FormControl>
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
        ))}
        <Label>
          How much money do you have available to you for the purposes of
          settling in Canada?
        </Label>
        <div className='flex gap-3 flex-col sm:flex-row'>
          {subFields.map(({ name, label, type }) => (
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
        </div>
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
        <div className='col-span-5 grid place-content-end'>
          <SubmitBtn isLoading={isPending} />
        </div>
      </form>
    </Form>
  );
}

export default Others;
