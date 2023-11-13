import * as z from 'zod';
export const formSchema = z.object({
  management_experience: z.boolean()
});
export const formFields = [
  {
    name: 'management_experience',
    label: 'Do you have at least 2 years of management experience',
    type: 'radio'
  }
];
