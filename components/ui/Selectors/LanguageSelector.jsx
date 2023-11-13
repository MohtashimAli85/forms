import { FormControl, FormLabel } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useWatch } from 'react-hook-form';
const options = ['English', 'French', 'None'];
const names = {
  first_official_language: 'second_official_language',
  second_official_language: 'first_official_language'
};
const LanguageSelector = ({ field, label, name }) => {
  const first_language = useWatch({ name: 'first_official_language' });
  const second_language = useWatch({ name: 'second_official_language' });
  const lang = {
    first_official_language: second_language,
    second_official_language: first_language
  };
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
              <SelectItem
                key={value}
                value={value}
                disabled={
                  names[field.name] !== field.name && value === lang[field.name]
                }
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

export default LanguageSelector;
