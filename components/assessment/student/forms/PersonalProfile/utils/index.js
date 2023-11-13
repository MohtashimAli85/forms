import * as z from 'zod';

export const schema = z.object({
  first_name: z.string().min(1, { message: 'First name is required.' }),
  last_name: z.string().min(1, { message: 'Last name is required.' }),
  email_address: z.string().email({ message: 'Must be a valid email.' }),
  nationality: z.string().min(1, { message: 'Nationality is required.' }),
  age: z.string().min(1, { message: 'Age is required.' }),
  highest_education: z
    .string()
    .min(1, { message: 'Highest education is required.' }),
  telephone: z.string().optional(),
  able_to_provide_statement: z.boolean(),
  current_country: z
    .string()
    .min(1, { message: 'Current Country is required.' }),
  letter_of_admission: z.boolean().nullable(),
  program_start: z.string().optional(),
  previously_refused: z.boolean().optional(),
  province_program: z.string().optional(),
  level_of_service_required: z.string().optional()
});

// Refinements based on letter_of_admission
export const formSchema = schema
  .refine(
    (data) => {
      return !data.letter_of_admission || !!data.program_start;
    },
    {
      path: ['program_start'],
      message: 'Program start date is required.'
    }
  )
  .refine((data) => !data.letter_of_admission || !!data.previously_refused, {
    path: ['previously_refused'],
    message: 'Previous refusal information is required.'
  })
  .refine((data) => !data.letter_of_admission || !!data.province_program, {
    path: ['province_program'],
    message: 'Province is required.'
  })
  .refine(
    (data) => !data.letter_of_admission || !!data.level_of_service_required,
    {
      path: ['level_of_service_required'],
      message: 'Level of service is required.'
    }
  );
export const formFields = [
  { name: 'first_name', label: 'First name', type: 'text' },
  { name: 'last_name', label: 'Last name', type: 'text' },
  { name: 'email_address', label: 'Email Address', type: 'email' },
  { name: 'nationality', label: 'Nationality', type: 'select' },
  {
    name: 'current_country',
    label: 'Country of Residence',
    type: 'select'
  },
  { name: 'age', label: 'Age', type: 'select' },
  { name: 'telephone', label: 'Telephone', type: 'tel' },
  {
    name: 'highest_education',
    label: 'Highest Study Level',
    type: 'select'
  },
  {
    name: 'able_to_provide_statement',
    label:
      '* Are you, or a family member, able to provide bank statements equivalent of $25,000 USD or more to cover your living expenses while you study in Canada?',
    type: 'radio'
  },
  {
    name: 'letter_of_admission',
    label:
      'Do you already have a letter of admission/acceptance to a Canadian educational institution?',
    type: 'radio'
  }
];
export const extraFields = [
  {
    name: 'program_start',
    label: 'When does your program start?',
    type: 'date'
  },
  {
    name: 'previously_refused',
    label: 'Have you previously been refused a study permit?',
    type: 'radio'
  },
  {
    name: 'province_program',
    label: 'What province is your program in?',
    type: 'select'
  },
  {
    name: 'level_of_service_required',
    label: 'What is the Level of service required?',
    type: 'select'
  }
];
