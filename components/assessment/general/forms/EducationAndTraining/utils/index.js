import * as z from 'zod';
const ProgramSchema = z.object({
  program_type: z.string().min(1, { message: 'Program Type is required.' }),
  field: z.string().min(1, { message: 'Field is required.' }),
  location: z.string().min(1, { message: 'Location is required.' }),
  school_in_canada: z
    .string()
    .optional()
    .refine(
      (data) => {
        if (data.location === 'outside canada') return true;
        return !data.school_in_canada;
      },
      {
        path: ['school_in_canada'],
        message: 'Required'
      }
    ),
  program_completed: z.boolean()
});

const FormSchema = z.object({
  studied_in_canada: z.boolean(),
  institute_name: z.string().min(1, { message: 'Institute name is required.' }),
  canadian_school: z.string().optional(),
  highest_study_canada: z.string(),
  highest_study_level: z.string(),

  programs_list: z.array(ProgramSchema)
});
const postSchema = z.object({
  post_secondary_education: z.boolean()
});
export { FormSchema as formSchema, postSchema };

export const formFields = [
  {
    name: 'post_secondary_education',
    label: 'Have you obtained any post-secondary education or training?',
    type: 'radio'
  }
];
export const subFields = [
  {
    name: 'studied_in_canada',
    label: 'Have you studied in Canada?',
    type: 'radio'
  },
  { name: 'institute_name', label: 'Institute Name', type: 'text' },

  {
    name: 'highest_study_level',
    label: 'Highest Study Level',
    type: 'select'
  }
];
export const programsList = [
  { name: 'program_type', label: 'Program Type', type: 'select' },
  { name: 'field', label: 'Field of Study', type: 'select' },
  { name: 'location', label: 'Location', type: 'select' },
  { name: 'school_in_canada', label: 'School in Canada', type: 'text' },
  {
    name: 'program_completed',
    label: 'Did you complete this program?',
    type: 'radio'
  }
];
