import { FormControl, FormLabel } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import clsx from 'clsx';
import { useWatch } from 'react-hook-form';
const age = Array(7).fill(0);
const ChildrenSelector = ({ field, label }) => {
  const value = useWatch({ name: 'children_under_22' });
  return (
    <div className={clsx(!value && 'hidden [&+p]:hidden', 'space-y-2')}>
      <FormControl>
        <>
          <FormLabel>{label}</FormLabel>

          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            name={field.name}
            className='hidden'
          >
            <FormControl>
              <SelectTrigger className='min-w-[180px] '>
                <SelectValue placeholder='Please Select' />
              </SelectTrigger>
            </FormControl>
            <SelectContent className='max-h-36 '>
              {age.map((_, index) => {
                const value = index + 1;
                const text = { 6: 'OR MORE' };
                return (
                  <SelectItem key={value} value={String(value)}>
                    {value} {text[index] || ''}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </>
      </FormControl>
    </div>
  );
};

export default ChildrenSelector;
