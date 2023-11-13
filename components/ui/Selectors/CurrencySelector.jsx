import { FormControl, FormLabel } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import useCountry from '@/hooks/useCountry';
const CurrencySelector = ({ field, label }) => {
  const { data, isLoading, isError } = useCountry();
  console.log({ data });
  return (
    <>
      <FormLabel>
        {label} {isLoading ? 'Loading' : isError ? 'Error' : ''}
      </FormLabel>

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
          {[].map((value, index) => {
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

export default CurrencySelector;
