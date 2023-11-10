import { FormControl, FormLabel } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { getCountryOptions } from '@/lib/utils';

const CountrySelect = ({ field, label }) => {
  const countries = getCountryOptions();
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
            <SelectValue placeholder='Select a country' />
          </SelectTrigger>
        </FormControl>
        <SelectContent className='max-h-36 '>
          {countries.map((country) => (
            <SelectItem key={country.value} value={country.value}>
              {country.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default CountrySelect;
