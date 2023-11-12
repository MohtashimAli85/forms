import React from 'react';
import { subFields } from './utils';
import YesNoRadio from '@/components/ui/Radios/YesNoRadio';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useWatch } from 'react-hook-form';
import EducationSelector from '@/components/ui/Selectors/EducationSelector';
import ProgramList from './SubForm';
import StudiedInCanada from './StudiedInCanada';

const SubFields = ({ form, value }) => {
  return (
    <div className={!value ? 'hidden' : 'space-y-3 '}>
      {subFields.map(({ name, label, type, condition }) => (
        <FormField
          key={name}
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                {type === 'select' ? (
                  // <Selector name={name} field={field} label={label} />
                  <EducationSelector field={field} label={label} />
                ) : // <EducationSelector field={field} label={label} />
                type === 'radio' ? (
                  <>
                    <StudiedInCanada
                      control={form.control}
                      field={field}
                      label={label}
                    />
                  </>
                ) : (
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
      <div className='border border-black rounded p-2 m-2'>
        <h1>Current (or most recent) Program of Study</h1>

        <FormControl>
          <>
            <ProgramList control={form.control} />
            {/* <FormMessage /> */}
          </>
        </FormControl>
      </div>
    </div>
  );
};

export default SubFields;
