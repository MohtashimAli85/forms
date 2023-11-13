import { FormControl, FormLabel } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
const Selector = ({ field, label, list }) => {
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
          {list?.map((_, index) => {
            const isString = typeof _ === 'string';
            const value = isString ? _ : _.value;
            return (
              <SelectItem key={value} value={value} className='uppercase'>
                {isString ? value : _.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </>
  );
};

export default Selector;
