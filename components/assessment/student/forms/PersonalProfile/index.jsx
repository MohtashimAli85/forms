import YesNoRadio from '@/components/ui/Radios/YesNoRadio';
import AgeSelector from '@/components/ui/Selectors/AgeSelector';
// import CountrySelect from '@/components/ui/Selectors/CountrySelect';
import EducationSelector from '@/components/ui/Selectors/EducationSelector';
import LevelServiceSelector from '@/components/ui/Selectors/LevelServiceSelector';
import ProvinceSelector from '@/components/ui/Selectors/ProvinceSelector';
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
import { useForm, useWatch } from 'react-hook-form';
import { extraFields, formFields, formSchema } from './utils';
const CountrySelect = dynamic(
  () => import('@/components/ui/Selectors/CountrySelect'),
  { ssr: false }
);
const Selectors = {
  nationality: CountrySelect,
  current_country: CountrySelect,
  age: AgeSelector,
  highest_education: EducationSelector,
  province_program: ProvinceSelector,
  level_of_service_required: LevelServiceSelector
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

  // Define the form fields to map over them

  return (
    <Form {...form}>
      <form
        aria-disabled={!!data?.status ? 'true' : 'false'}
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
                    name == 'letter_of_admission' ? (
                      <LetterOfAdmission field={field} label={label} />
                    ) : (
                      <>
                        <YesNoRadio field={field} label={label} />
                      </>
                    )
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
        <ExtraFields form={form} />
        <div className='col-span-2 lg:col-span-3 grid place-content-end'>
          <Button type='submit'>Next Step</Button>
        </div>
      </form>
    </Form>
  );
}
const LetterOfAdmission = ({ field, label }) => {
  return (
    <>
      <YesNoRadio field={field} label={label} isNotSure />
    </>
  );
};
const ExtraFields = ({ form }) => {
  const value = useWatch({ name: 'letter_of_admission' });
  if (!value) return null;
  return (
    <>
      {extraFields.map(({ name, label, type }) => (
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
    </>
  );
};
export default ProfileForm;
