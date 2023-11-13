import * as z from 'zod';

export const formSchema = z.object({
  skills_outside_canada: z
    .string()
    .min(1, { message: 'This field is required.' }),
  skills_inside_canada: z
    .string()
    .min(1, { message: 'This field is required.' }),
  certificate_qualification: z.boolean(),
  certificate_nomination: z.boolean(),
  valid_job: z.boolean(),
  senior_managerial_role: z.boolean(),
  siblings: z.boolean(),
  relative_in_canada: z.boolean(),
  criminal_record: z.boolean(),
  bad_medical_condition: z.boolean(),
  currency: z.string().min(1, { message: 'This field is required.' }),
  amount: z.string().min(1, { message: 'This field is required.' })
});

export const formFields = [
  {
    name: 'skills_outside_canada',
    label:
      'In the last 10 years, how many years of skilled work experience OUTSIDE CANADA do you have?',
    type: 'select'
  },
  {
    name: 'skills_inside_canada',
    label:
      'In the last 10 years, how many years of skilled work experience INSIDE CANADA do you have?',
    type: 'select'
  },
  {
    name: 'certificate_qualification',
    label:
      'Do you have a certificate of qualification from a Canadian provincial, territorial, or federal body?',
    type: 'radio'
  },
  {
    name: 'certificate_nomination',
    label:
      'Do you have a certificate of nomination from a Canadian province or territory?',
    type: 'radio'
  },
  {
    name: 'valid_job',
    label: 'Do you have a valid job offer from a Canadian employer?',
    type: 'radio'
  },
  {
    name: 'senior_managerial_role',
    label: 'Is the job offer in a senior managerial role?',
    type: 'radio'
  },
  {
    name: 'siblings',
    label:
      'Do you or your Spouse/Common-Law Partner have a brother or sister living in Canada who is a citizen or permanent resident?',
    type: 'radio'
  },
  {
    name: 'relative_in_canada',
    label:
      'Do you or your Spouse/Common-Law Partner have any family members and or extended relatives living in Canada?',
    type: 'radio'
  },
  {
    name: 'criminal_record',
    label:
      'Do you or your Spouse/Common-Law Partner or dependent children have a criminal record?',
    type: 'radio'
  },
  {
    name: 'bad_medical_condition',
    label:
      'Do you or your Spouse/Common-Law Partner or dependent children have a serious medical condition?',
    type: 'radio'
  }
];
export const subFields = [
  { name: 'currency', label: 'Currency', type: 'select' },
  { name: 'amount', label: 'Amount', type: 'select' }
];
export const skills_outside_canada = [
  'None or less than a year',
  '1 or 2 years',
  '3 years or more'
];
export const skills_inside_canada = [
  'None or less than a year',
  '1 year',
  '2 years',
  '3 years',
  '4 years',
  '5 years',
  '6 years or more'
];
export const list = { skills_inside_canada, skills_outside_canada };
