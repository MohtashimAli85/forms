import * as z from 'zod';

export const formSchema = z.object({
  first_language: z.string().min(1, { message: 'First language is required.' }),
  first_language_read: z
    .string()
    .min(1, { message: 'Read Proficiency is required.' }),
  first_language_write: z
    .string()
    .min(1, { message: 'Writing Proficiency is required.' }),
  first_language_speak: z
    .string()
    .min(1, { message: 'Speaking Proficiency is required.' }),
  first_language_listen: z
    .string()
    .min(1, { message: 'Listening Proficiency is required.' }),
  second_language: z
    .string()
    .min(1, { message: 'Second language is required.' }),
  second_language_read: z
    .string()
    .min(1, { message: 'Read Proficiency is required.' }),
  second_language_write: z
    .string()
    .min(1, { message: 'Writing Proficiency is required.' }),
  second_language_speak: z
    .string()
    .min(1, { message: 'Speaking Proficiency is required.' }),
  second_language_listen: z
    .string()
    .min(1, { message: 'Listening Proficiency is required.' })
});

export const formFields = [
  {
    name: 'first_language',
    label: 'First official language',
    type: 'select',
    isSkillSelector: false
  },
  {
    name: 'first_language_read',
    label: 'Read Proficiency',
    type: 'select',
    isSkillSelector: true
  },
  {
    name: 'first_language_write',
    label: 'Writing Proficiency',
    type: 'select',
    isSkillSelector: true
  },
  {
    name: 'first_language_speak',
    label: 'Speaking Proficiency',
    type: 'select',
    isSkillSelector: true
  },
  {
    name: 'first_language_listen',
    label: 'Listening Proficiency',
    type: 'select',
    isSkillSelector: true
  },
  {
    name: 'second_language',
    label: 'Second official language',
    type: 'select',
    isSkillSelector: false
  },
  {
    name: 'second_language_read',
    label: 'Read Proficiency',
    type: 'select',
    isSkillSelector: true
  },
  {
    name: 'second_language_write',
    label: 'Writing Proficiency',
    type: 'select',
    isSkillSelector: true
  },
  {
    name: 'second_language_speak',
    label: 'Speaking Proficiency',
    type: 'select',
    isSkillSelector: true
  },
  {
    name: 'second_language_listen',
    label: 'Listening Proficiency',
    type: 'select',
    isSkillSelector: true
  }
];
