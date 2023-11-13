import useCountry from '@/hooks/useCountry';
import React from 'react';
import { useWatch } from 'react-hook-form';
import { FormControl, FormLabel } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

const AmountSelector = ({ field, label, watch }) => {
  const { data, isLoading, isError } = useCountry();
  const currency = useWatch({ name: watch });
  const list = data?.find((item) => item.currency == currency)?.amounts || [];
  console.log({ currency, list });
  return (
    <>
      <FormLabel>{label}</FormLabel>

      <Select
        onValueChange={field.onChange}
        defaultValue={field.value}
        name={field.name}
      >
        <FormControl>
          <SelectTrigger className='min-w-[180px] '>
            <SelectValue placeholder='Please Select' />
          </SelectTrigger>
        </FormControl>
        <SelectContent className='max-h-36 '>
          {list?.map((value, index) => {
            return (
              <SelectItem
                key={value}
                value={String(value)}
                className='uppercase'
              >
                {value}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </>
  );
};

export default AmountSelector;
