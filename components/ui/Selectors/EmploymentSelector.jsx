import { FormControl, FormLabel } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
const options = [
  'FULL TIME - MORE THAN 30HRS/WEEK',
  'PART TIME - LESS THAN 30HRS/WEEK'
];

const EmploymentSelector = ({ field, label }) => {
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
          {options.map((value, index) => {
            return (
              <SelectItem key={value} value={value}>
                {value}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </>
  );
};

export default EmploymentSelector;
