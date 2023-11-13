import YesNoRadio from '@/components/ui/Radios/YesNoRadio';
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
import { useForm, useWatch } from 'react-hook-form';
import { formFields, formSchema, workSchema, subFields } from './utils';
import SubFields from './SubFields';

export default function EducationAndTraining({ nextStep, data, updateForm }) {
  const mainForm = useForm({
    defaultValues: {
      paid_work_experience: data.work_experience?.paid_work_experience
    },
    resolver: zodResolver(workSchema)
  });
  const { control, handleSubmit } = mainForm;
  const paid_work_experience = useWatch({
    control,
    name: 'paid_work_experience'
  });
  const form = useForm({
    defaultValues: data.work_experience,
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data) => {
    nextStep();
    updateForm({ paid_work_experience, ...data }, 'work_experience');
  };

  // Define the form fields to map over them

  const finalForm = paid_work_experience ? form : mainForm;
  return (
    <Form {...finalForm}>
      <form
        onSubmit={
          paid_work_experience
            ? form.handleSubmit(onSubmit)
            : handleSubmit(onSubmit)
        }
        className='space-y-3 '
      >
        {formFields.map(({ name, label, type }) => (
          <FormField
            key={name}
            control={control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <>
                      <YesNoRadio field={field} label={label} />
                    </>
                    <FormMessage />
                  </>
                </FormControl>
              </FormItem>
            )}
          />
        ))}
        {paid_work_experience && (
          <SubFields control={form.control} value={paid_work_experience} />
        )}
        <div className='col-span-2 grid place-content-end'>
          <Button type='submit'>Next Step</Button>
        </div>
      </form>
    </Form>
  );
}
