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
  console.log({ default: data });
  const { control, getValues, handleSubmit } = useForm({
    defaultValues: {
      post_secondary_education:
        data.education_training?.post_secondary_education
    },
    resolver: zodResolver(postSchema)
  });
  console.log({ error: control._formState.errors });
  const post_secondary_education = useWatch({
    control,
    name: 'post_secondary_education'
  });
  const form = useForm({
    defaultValues: data.education_training,
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data) => {
    // nextStep();
    console.log({ data });
    updateForm({ post_secondary_education, ...data }, 'education_training');
  };

  // Define the form fields to map over them
  console.log({
    pew: form.getValues(),
    errors: form.control._formState.errors
  });
  return (
    <Form {...form}>
      <form
        onSubmit={
          post_secondary_education
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
