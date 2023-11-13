import { FormControl, FormLabel } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
const age = Array(7).fill(0);
const DurationSelector = ({ field, label }) => {
  return (
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
            const value =
              index > 0 ? index + ' year' : 'None or less than ayear';
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

export default DurationSelector;
