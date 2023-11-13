// import CountrySelect from '@/components/ui/Selectors/CountrySelect';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { formFields, formSchema } from './utils';
import SkillLevelSelector from '@/components/ui/Selectors/SkillLevelSelector';
import LanguageSelector from '@/components/ui/Selectors/LanguageSelector';

const Selector = ({ field, label, isSkillSelector }) => {
  if (isSkillSelector)
    return <SkillLevelSelector field={field} label={label} />;
  return <LanguageSelector field={field} label={label} />;
};
function CanadianLanguageProficiency({ nextStep, data, updateForm }) {
  const form = useForm({
    defaultValues: data.canadian_Language_proficiency,
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data) => {
    updateForm(data, 'canadian_Language_proficiency');
    nextStep();
  };

  // Define the form fields to map over them

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={
          'space-y-3 md:space-y-0 md:grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-3 animate-accordion-down'
        }
      >
        {formFields.map(({ name, label, isSkillSelector }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Selector
                    field={field}
                    label={label}
                    isSkillSelector={isSkillSelector}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <div className=' md:col-span-3  xl:col-span-5 grid place-content-end'>
          <Button type='submit'>Next Step</Button>
        </div>
      </form>
    </Form>
  );
}

export default CanadianLanguageProficiency;
