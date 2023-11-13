import * as z from 'zod';

export const formSchema = z
  .object({
    first_name: z.string().min(1, { message: 'First name is required.' }),
    last_name: z.string().min(1, { message: 'Last name is required.' }),
    email_address: z.string().email({ message: 'Must be a valid email.' }),
    nationality: z.string().min(1, { message: 'Nationality is required.' }),
    age: z.string().min(1, { message: 'Age is required.' }),
    to_do: z.string().min(1, { message: 'Age is required.' }),
    telephone: z.string(),
    marital_status: z
      .string()
      .min(1, { message: 'Marital status is required.' }),
    children_under_22: z.boolean(),
    number_of_children: z.string().optional(),
    current_country: z
      .string()
      .min(1, { message: 'Current Country is required.' })
  })
  .refine(
    (data) => {
      return (
        !data.children_under_22 ||
        (data.number_of_children && data.number_of_children.trim() !== '')
      );
    },
    {
      path: ['number_of_children'],
      message: 'Number of children is required.'
    }
  );

export const formFields = [
  { name: 'first_name', label: 'First name', type: 'text' },
  { name: 'last_name', label: 'Last name', type: 'text' },
  { name: 'email_address', label: 'Email Address', type: 'email' },
  { name: 'nationality', label: 'Nationality', type: 'select' },
  { name: 'telephone', label: 'Telephone', type: 'tel' },
  { name: 'age', label: 'Age', type: 'select' },
  { name: 'marital_status', label: 'Marital Status', type: 'select' },
  {
    name: 'children_under_22',
    label: 'Do you have any children under the age of 22?',
    type: 'radio'
  },
  {
    name: 'number_of_children',
    label: 'How many children under the age of 22 do you have?',
    type: 'select'
  },
  {
    name: 'current_country',
    label: 'Where do you currently live?',
    type: 'select'
  },
  { name: 'to_do', label: ' What would you like to do', type: 'select' }
];
