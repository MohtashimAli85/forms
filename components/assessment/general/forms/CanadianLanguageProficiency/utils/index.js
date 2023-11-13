import * as z from 'zod';

export const formSchema = z.object({
  first_official_language: z
    .string()
    .min(1, { message: 'First language is required.' }),
  first_read_proficiency: z
    .string()
    .min(1, { message: 'Read Proficiency is required.' }),
  first_write_proficiency: z
    .string()
    .min(1, { message: 'Writing Proficiency is required.' }),
  first_speak_proficiency: z
    .string()
    .min(1, { message: 'Speaking Proficiency is required.' }),
  first_listening_proficiency: z
    .string()
    .min(1, { message: 'Listening Proficiency is required.' }),
  second_official_language: z
    .string()
    .min(1, { message: 'Second language is required.' }),
  second_read_proficiency: z
    .string()
    .min(1, { message: 'Read Proficiency is required.' })
    .optional(),
  second_write_proficiency: z
    .string()
    .min(1, { message: 'Writing Proficiency is required.' })
    .optional(),
  second_speak_proficiency: z
    .string()
    .min(1, { message: 'Speaking Proficiency is required.' })
    .optional(),
  second_listening_proficiency: z
    .string()
    .min(1, { message: 'Listening Proficiency is required.' })
    .optional()
});

export const formFields = [
  {
    name: 'first_official_language',
    label: 'First official language',
    type: 'select',
    isSkillSelector: false
  },
  {
    name: 'first_read_proficiency',
    label: 'Read Proficiency',
    type: 'select',
    isSkillSelector: true
  },
  {
    name: 'first_write_proficiency',
    label: 'Writing Proficiency',
    type: 'select',
    isSkillSelector: true
  },
  {
    name: 'first_speak_proficiency',
    label: 'Speaking Proficiency',
    type: 'select',
    isSkillSelector: true
  },
  {
    name: 'first_listening_proficiency',
    label: 'Listening Proficiency',
    type: 'select',
    isSkillSelector: true
  },
  {
    name: 'second_official_language',
    label: 'Second official language',
    type: 'select',
    isSkillSelector: false
  },
  {
    name: 'second_read_proficiency',
    label: 'Read Proficiency',
    type: 'select',
    isSkillSelector: true
  },
  {
    name: 'second_write_proficiency',
    label: 'Writing Proficiency',
    type: 'select',
    isSkillSelector: true
  },
  {
    name: 'second_speak_proficiency',
    label: 'Speaking Proficiency',
    type: 'select',
    isSkillSelector: true
  },
  {
    name: 'second_listening_proficiency',
    label: 'Listening Proficiency',
    type: 'select',
    isSkillSelector: true
  }
];
