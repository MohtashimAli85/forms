import * as z from 'zod';

export const formSchema = z.object({
  criminal_record: z.boolean(),
  medication_required: z.boolean(),
  comments: z.string().optional()
});
export const formFields = [
  {
    name: 'criminal_record',
    label: 'I have a criminal record',
    type: 'radio'
  },
  {
    name: 'medication_required',
    label: 'I have a serious medical condition',
    type: 'radio'
  }
];
