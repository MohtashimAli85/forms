import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import React from 'react';

const YesNoRadio = ({ field, label, isNotSure }) => {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <RadioGroup
        onValueChange={field.onChange}
        defaultValue={field.value}
        className='flex gap-2 '
      >
        <FormItem className='flex items-center space-x-3 space-y-0'>
          <FormControl>
            <RadioGroupItem value={true} />
          </FormControl>
          <FormLabel className='font-normal'>Yes</FormLabel>
        </FormItem>
        <FormItem className='flex items-center space-x-3 space-y-0'>
          <FormControl>
            <RadioGroupItem value={false} />
          </FormControl>
          <FormLabel className='font-normal'>No</FormLabel>
        </FormItem>
        {isNotSure && (
          <FormItem className='flex items-center space-x-3 space-y-0'>
            <FormControl>
              <RadioGroupItem value={null} />
            </FormControl>
            <FormLabel className='font-normal'>I'm not sure</FormLabel>
          </FormItem>
        )}
      </RadioGroup>
    </>
  );
};

export default YesNoRadio;
