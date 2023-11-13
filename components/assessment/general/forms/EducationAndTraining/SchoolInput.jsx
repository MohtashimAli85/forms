import { FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react';
import { useWatch } from 'react-hook-form';

const SchoolInput = ({ name, field, label }) => {
  const value = useWatch({ name });
  if (value === 'outside canada') return null;
  return (
    <>
      <FormLabel>{label}</FormLabel>

      <Input type={'text'} {...field} />
    </>
  );
};

export default SchoolInput;
