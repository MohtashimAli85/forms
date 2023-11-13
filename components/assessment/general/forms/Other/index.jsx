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
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { formFields, formSchema, list, subFields } from './utils';
import SkillLevelSelector from '@/components/ui/Selectors/SkillLevelSelector';
import LanguageSelector from '@/components/ui/Selectors/LanguageSelector';
import YesNoRadio from '@/components/ui/Radios/YesNoRadio';
import Selector from '@/components/ui/Selectors/Selector';
import { Label } from '@/components/ui/label';
import CurrencySelector from '@/components/ui/Selectors/CurrencySelector';

function Others({ nextStep, data, updateForm }) {
  const form = useForm({
    defaultValues: data.others,
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data) => {
    updateForm(data, 'others');
    nextStep();
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
        {subFields.map(({ name, label, type }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  {name === 'currency' ? (
                    <>
                      <CurrencySelector field={field} label={label} />
                    </>
                  ) : (
                    <></>
                  )}
                </FormControl>
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
        ))}
        <div className='col-span-5 grid place-content-end'>
          <Button type='submit'>Next Step</Button>
        </div>
      </form>
    </Form>
  );
}

export default Others;
