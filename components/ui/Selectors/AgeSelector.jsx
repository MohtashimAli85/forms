import { FormControl, FormLabel } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
const age = Array(31).fill(0);
const AgeSelector = ({ field, label }) => {
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
          {age.map((_, index) => {
            const value = index + 17;
            const text = { 0: 'OR UNDER', 30: 'AND OLDER' };
            return (
              <SelectItem key={value} value={String(value)}>
                {value} {text[index] || ''}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </>
  );
};

export default AgeSelector;
