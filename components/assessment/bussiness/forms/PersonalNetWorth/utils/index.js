import * as z from 'zod';
export const formSchema = z.object({
  net_worth: z.string().min(1, { message: 'This field is required.' }),
  currency: z.string().min(1, { message: 'This field is required.' })
});
export const formFields = [
  { name: 'currency', label: 'Currency', type: 'select' },
  { name: 'net_worth', label: 'Net Worth', type: 'select' }
];
