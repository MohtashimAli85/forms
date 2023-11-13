import * as z from 'zod';

export const formSchema = z
  .object({
    relative_name: z
      .string()
      .min(1, { message: "Relative's full name is required." }),
    relation_with_relative: z
      .string()
      .min(1, { message: 'Relationship to relative is required.' }),
    social_assistance: z.boolean(),
    citizen_or_resident: z
      .string()
      .min(1, { message: 'Residency status is required.' }),
    currently_residing_canada: z.boolean(),
    residing_province: z.string().optional()
  })
  .refine(
    (data) => {
      return !data.currently_residing_canada || !!data.residing_province;
    },
    {
      path: ['residing_province'],
      message:
        'Residing province is required when currently residing in Canada.'
    }
  );

export const formFields = [
  {
    name: 'relative_name',
    label: "What is your relative's full name",
    type: 'text'
  },
  {
    name: 'relation_with_relative',
    label: 'What is your relationship to your relative',
    type: 'select'
  },
  {
    name: 'social_assistance',
    label:
      'Are you (the Sponsor) currently getting any kind of social assistance from the Government',
    type: 'radio'
  },
  {
    name: 'citizen_or_resident',
    label: 'Are you (the sponsor) a citizen or permanent resident of Canada',
    type: 'select'
  },
  {
    name: 'currently_residing_canada',
    label: 'Are you (the sponsor) currently residing in Canada',
    type: 'radio'
  },
  {
    name: 'residing_province',
    label: 'Which province of Canada do you (the sponsor) reside in',
    type: 'select'
  }
];

// Define options separately
const relation_with_relative = [
  { name: 'Spouse or Common-Law Partner', value: 'spouse' },
  { name: 'Mother or Father', value: 'parent' },
  { name: 'Daughter or Son', value: 'kid' },
  { name: 'Grandmother or Grandfather', value: 'grandparent' },
  { name: 'Granddaughter or Grandson', value: 'grandkid' },
  { name: 'Sister or Brother', value: 'sibling' },
  { name: 'Niece or Nephew', value: 'nibling' },
  { name: 'Aunt or Uncle', value: 'pibling' },
  { name: 'Cousin', value: 'cousin' },
  { name: 'Distant Relative', value: 'distant-relative' },
  { name: 'Close Friend', value: 'close-friend' }
];
const citizen_or_resident = [
  { name: 'Citizen', value: 'Citizen' },
  { name: 'Permanent Resident', value: 'Permanent Resident' },
  { name: 'Work Permit', value: 'Work Permit' },
  { name: 'Study Permit', value: 'Study Permit' }
];

const residing_province = [
  { name: 'Alberta', value: 'Alberta' },
  { name: 'British Columbia', value: 'British Columbia' },
  { name: 'Manitoba', value: 'Manitoba' },
  { name: 'New Brunswick', value: 'New Brunswick' },
  { name: 'Newfoundland and Labrador', value: 'Newfoundland and Labrador' },
  { name: 'Northwest Territories', value: 'Northwest Territories' },
  { name: 'Nova Scotia', value: 'Nova Scotia' },
  { name: 'Nunavut', value: 'Nunavut' },
  { name: 'Ontario', value: 'Ontario' },
  { name: 'Prince Edward Island', value: 'Prince Edward Island' },
  { name: 'Quebec', value: 'Quebec' },
  { name: 'Saskatchewan', value: 'Saskatchewan' },
  { name: 'Yukon', value: 'Yukon' }
];

// Example usage:

export const lists = {
  relation_with_relative,
  citizen_or_resident,
  residing_province
};
// Example usage:

// Form Schema using Zod
