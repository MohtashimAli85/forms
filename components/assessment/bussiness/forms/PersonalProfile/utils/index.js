import * as z from 'zod';

export const formSchema = z.object({
  first_name: z.string().min(1, { message: 'First name is required.' }),
  last_name: z.string().min(1, { message: 'Last name is required.' }),
  email_address: z.string().email({ message: 'Must be a valid email.' }),
  nationality: z.string().min(1, { message: 'Nationality is required.' }),
  telephone: z.string().optional(),
  current_country: z
    .string()
    .min(1, { message: 'Current Country is required.' })
});

export const formFields = [
  { name: 'first_name', label: 'First name', type: 'text' },
  { name: 'last_name', label: 'Last name', type: 'text' },
  { name: 'email_address', label: 'Email Address', type: 'email' },
  { name: 'nationality', label: 'Nationality', type: 'select' },
  { name: 'telephone', label: 'Telephone', type: 'tel' },
  {
    name: 'current_country',
    label: ' Country of Residence',
    type: 'select'
  }
];
