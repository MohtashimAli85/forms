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
  const list = data?.map((item) => ({
    label: `${item.country}(${item.currency})`,
    value: item.currency
  }));
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
          {list?.map((item, index) => {
            return (
              <SelectItem
                key={item.value}
                value={String(item.value)}
                className='uppercase'
              >
                {item.label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </>
  );
};

export default CurrencySelector;
