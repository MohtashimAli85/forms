import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import EducationSelector from '@/components/ui/Selectors/EducationSelector';
import { Input } from '@/components/ui/input';
import YesNoRadio from '@/components/ui/Radios/YesNoRadio';
const StudiedInCanada = ({ field, label, control }) => {
  return (
    <div className='flex gap-3'>
      <div className='space-y-2'>
        <YesNoRadio field={field} label={label} />
      </div>
      {field.value && (
        <div className='flex-1'>
          {inputs.map(({ name, label, type }) => (
            <FormField
              key={name}
              control={control}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    {type === 'select' ? (
                      // <Selector name={name} field={field} label={label} />
                      <EducationSelector field={field} label={label} />
                    ) : (
                      // <EducationSelector field={field} label={label} />

                      <>
                        <FormLabel>{label}</FormLabel>

                        <Input type={type} {...field} />
                      </>
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StudiedInCanada;
const inputs = [
  {
    name: 'canadian_school',
    label: 'Canadian School',
    type: 'text',
    condition: 'studied_in_canada'
  },
  {
    name: 'highest_study_canada',
    label: 'Highest Study in Canada',
    type: 'select',
    condition: 'studied_in_canada'
  }
];
