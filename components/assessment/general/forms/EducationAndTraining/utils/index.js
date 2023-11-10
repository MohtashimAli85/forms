import * as z from 'zod';

const ProgramSchema = z.object({
  program_type: z.string().min(1, { message: 'Program type is required.' }),
  field: z.string().min(1, { message: 'Field of study is required.' }),
  location: z.string().min(1, { message: 'Location is required.' }),
  school_in_canada: z
    .string()
    .min(1, { message: 'School in Canada is required.' }),
  program_completed: z.boolean()
});

const FormSchema = z.object({
  post_secondary_education: z.boolean(),
  institute_name: z.string(),
  highest_study_canada: z.string(),
  programs_list: z.array(ProgramSchema)
});

// Refinement outside the main schema
const FinalFormSchema = FormSchema.refine(
  (data) => {
    // Check if post_secondary_education is true, then make fields required
    return (
      !data.post_secondary_education ||
      (data.institute_name &&
        data.highest_study_canada &&
        data.programs_list &&
        data.programs_list.length > 0 &&
        data.programs_list.every(
          (program) => ProgramSchema.safeParse(program).success
        ))
    );
  },
  {
    path: ['institute_name', 'highest_study_canada', 'programs_list'],
    message: 'All fields are required when post_secondary_education is true.'
  }
);

export { FinalFormSchema as FormSchema };

export const formFields = [
  {
    name: 'post_secondary_education',
    label: 'Have you obtained any post-secondary education or training?',
    type: 'radio'
  }
];
export const subFields = [
  { name: 'institute_name', label: 'Institute Name', type: 'text' },
  {
    name: 'highest_study_canada',
    label: 'Highest Study in Canada',
    type: 'text'
  },
  {
    name: 'programs_list',
    label: 'Programs List',
    type: 'array',
    fields: [
      { name: 'program_type', label: 'Program Type', type: 'text' },
      { name: 'field', label: 'Field of Study', type: 'text' },
      { name: 'location', label: 'Location', type: 'text' },
      { name: 'school_in_canada', label: 'School in Canada', type: 'text' },
      {
        name: 'program_completed',
        label: 'Program Completed',
        type: 'checkbox'
      }
    ]
  }
];
