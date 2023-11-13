import * as z from 'zod';

// Form Schema using Zod
export const formSchema = z
  .object({
    programs: z.object({
      'healthcare-assistance': z.boolean().optional(),
      'business-administration': z.boolean().optional(),
      accounting: z.boolean().optional(),
      'information-technology': z.boolean().optional(),
      industrial: z.boolean().optional(),
      'culinary-arts': z.boolean().optional(),
      'natural-sciences': z.boolean().optional(),
      'social-sciences': z.boolean().optional(),
      engineering: z.boolean().optional(),
      'web-development': z.boolean().optional(),
      'electrical-technician': z.boolean().optional(),
      'childhood-education': z.boolean().optional(),
      marketing: z.boolean().optional(),
      cosmetology: z.boolean().optional(),
      'language-training': z.boolean().optional(),
      other: z.boolean().optional()
    })
  })
  .refine(
    (data) => {
      const selectedPrograms = Object.values(data.programs).filter(Boolean);
      console.log({ selectedPrograms, data });
      return selectedPrograms.length === 3;
    },
    {
      path: ['programs'],
      message: 'Please select exactly 3 programs.'
    }
  );

// Form Fields
export const formFields = [
  {
    name: 'programs.healthcare-assistance',
    label: 'Healthcare Assistance',
    type: 'checkbox'
  },
  {
    name: 'programs.business-administration',
    label: 'Business Administration/Secretarial',
    type: 'checkbox'
  },
  {
    name: 'programs.accounting',
    label: 'Accounting/Finance',
    type: 'checkbox'
  },
  {
    name: 'programs.information-technology',
    label: 'Information Technology/Computer Support',
    type: 'checkbox'
  },
  {
    name: 'programs.industrial',
    label: 'Industrial/Architectural Design',
    type: 'checkbox'
  },
  {
    name: 'programs.culinary-arts',
    label: 'Culinary Arts',
    type: 'checkbox'
  },
  {
    name: 'programs.natural-sciences',
    label: 'Natural Sciences',
    type: 'checkbox'
  },
  {
    name: 'programs.social-sciences',
    label: 'Social Sciences',
    type: 'checkbox'
  },
  {
    name: 'programs.engineering',
    label: 'Engineering',
    type: 'checkbox'
  },
  {
    name: 'programs.web-development',
    label: 'Web Development/Graphic Design',
    type: 'checkbox'
  },
  {
    name: 'programs.electrical-technician',
    label: 'Electrical Technician',
    type: 'checkbox'
  },
  {
    name: 'programs.childhood-education',
    label: 'Early Childhood Education',
    type: 'checkbox'
  },
  {
    name: 'programs.marketing',
    label: 'Marketing',
    type: 'checkbox'
  },
  {
    name: 'programs.cosmetology',
    label: 'Cosmetology/Esthetics',
    type: 'checkbox'
  },
  {
    name: 'programs.language-training',
    label: 'English/French Language Training',
    type: 'checkbox'
  },
  {
    name: 'programs.other',
    label: 'Other',
    type: 'checkbox'
  }
];
