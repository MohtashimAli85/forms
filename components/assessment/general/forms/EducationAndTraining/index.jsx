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
import { formFields, formSchema, postSchema, subFields } from './utils';
import SubFields from './SubFields';

export default function EducationAndTraining({ nextStep, data, updateForm }) {
  const mainForm = useForm({
    defaultValues: {
      post_secondary_education:
        data.education_training?.post_secondary_education
    },
    resolver: zodResolver(postSchema)
  });
  const { control, handleSubmit } = mainForm;
  const post_secondary_education = useWatch({
    control,
    name: 'post_secondary_education'
  });
  const form = useForm({
    defaultValues: data.education_training,
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data) => {
    nextStep();
    updateForm({ post_secondary_education, ...data }, 'education_training');
  };

  const finalForm = post_secondary_education ? form : mainForm;
  return (
    <Form {...finalForm}>
      <form
        onSubmit={
          post_secondary_education
            ? form.handleSubmit(onSubmit)
            : handleSubmit(onSubmit)
        }
        aria-disabled={!!data?.status ? 'true' : 'false'}

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
        {/* <FormField
          name='programs_list'
          control
          render={(field) => {
            return (
              <>
              </>
            );
          }}
        ></FormField> */}
        {post_secondary_education && (
          <SubFields form={form} value={post_secondary_education} />
        )}
        <div className='col-span-2 grid place-content-end'>
          <Button type='submit'>Next Step</Button>
        </div>
      </form>
    </Form>
  );
}
