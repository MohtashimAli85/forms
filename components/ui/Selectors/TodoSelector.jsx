import { FormControl, FormLabel } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

const list = [
  { name: 'Sponsor foreign relative', value: 'sponsor_foreign_relative' },
  {
    name: 'Relative in Canada to sponsor me',
    value: 'relative_in_canada_sponsor_me'
  }
];

const ToDoSelector = ({ field, label }) => {
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
          {list.map(({ name, value }) => {
            return (
              <SelectItem key={value} value={value}>
                {name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </>
  );
};

export default ToDoSelector;
