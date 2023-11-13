import { FormControl, FormLabel } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { yearsArray } from '@/lib/utils';

const YearSelector = ({ field, label }) => {
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
          {yearsArray.map((value, index) => {
            return (
              <SelectItem key={value} value={String(value)}>
                {value}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </>
  );
};

export default YearSelector;
