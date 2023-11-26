import YesNoRadio from '@/components/ui/Radios/YesNoRadio';
import AgeSelector from '@/components/ui/Selectors/AgeSelector';
import ChildrenSelector from '@/components/ui/Selectors/ChildrenSelector';
// import CountrySelect from '@/components/ui/Selectors/CountrySelect';
import MaritalSelector from '@/components/ui/Selectors/MaritalSelector';
import ToDoSelector from '@/components/ui/Selectors/TodoSelector';
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
import { formFields, formSchema, lists } from './utils';
import Selector from '@/components/ui/Selectors/Selector';
const CountrySelect = dynamic(
  () => import('@/components/ui/Selectors/CountrySelect'),
  { ssr: false }
);
const Selectors = {
  nationality: CountrySelect,
  current_country: CountrySelect,
  age: AgeSelector,
  marital_status: MaritalSelector,
  number_of_children: ChildrenSelector,
  to_do: ToDoSelector
};
// const Selector = ({ name, field, label }) => {
//   const Select = Selectors[name];
//   if (Select)
//     return (
//       <>
//         <Select field={field} label={label} />
//       </>
//     );
//   return <></>;
// };
function RelativeInformation({ nextStep, data, updateForm }) {
  const form = useForm({
    defaultValues: data.relative_information,
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data) => {
    updateForm(data, 'relative_information');
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
                    name === 'residing_province' ? (
                      <ResidingProvince
                        list={lists[name] || null}
                        field={field}
                        label={label}
                      />
                    ) : (
                      <Selector
                        list={lists[name] || null}
                        field={field}
                        label={label}
                      />
                    )
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
        <div className='col-span-2 lg:col-span-3 grid place-content-end'>
          <Button type='submit'>Next Step</Button>
        </div>
      </form>
    </Form>
  );
}
const ResidingProvince = ({ list, field, label }) => {
  const value = useWatch({ name: 'currently_residing_canada' });
  if (!value) return null;
  return <Selector list={list} field={field} label={label} />;
};
export default RelativeInformation;
