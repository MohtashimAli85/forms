import * as z from 'zod';
const WorkExperienceSchema = z
  .object({
    occupation: z.string().min(1, { message: 'Required.' }),
    employment_type: z.string().min(1, { message: 'Required.' }),
    job_start_year: z.string().min(1, { message: 'Required.' }),
    job_end_year: z.string().optional(),
    job_duration: z.string().min(1, { message: 'Required.' }),
    location: z.string().min(1, { message: 'Required.' })
  })
  .refine(
    (data) => {
      const jobStartYear = Number(data.job_start_year);
      const jobEndYear = Number(data.job_end_year);
      const isValid = jobStartYear > jobEndYear;
      return !isValid;
    },
    {
      path: ['job_end_year'],
      message: 'Start Year cannot be higher than End Year'
    }
  );
WorkExperienceSchema.keyof;
const FormSchema = z.object({
  work_experiences: z.array(WorkExperienceSchema)
});
const workSchema = z.object({
  paid_work_experience: z.boolean()
});
export { FormSchema as formSchema, workSchema };

export const formFields = [
  {
    name: 'paid_work_experience',
    label: 'Have you obtained any paid work experience in the last 10 years?',
    type: 'radio'
  }
];

export const workExperienceList = [
  { name: 'occupation', label: 'Occupation', type: 'text' },
  { name: 'employment_type', label: 'Employment Type', type: 'select' },
  { name: 'job_start_year', label: 'Job Start Year', type: 'select' },
  { name: 'job_end_year', label: 'Job End Year', type: 'select' },
  {
    name: 'job_duration',
    label: 'Job Duration',
    type: 'select'
  },
  {
    name: 'location',
    label: 'Location',
    type: 'select'
  }
];
