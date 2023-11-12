import { FormControl, FormLabel } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
const selectorValues = [
  { index: 0, value: 'Please Select' },
  { index: 1, value: 'Less than secondary school (High school)' },
  { index: 2, value: 'Secondary diploma (High school graduation)' },
  { index: 3, value: 'One-year post-secondary program' },
  { index: 4, value: 'Two-year post-secondary program' },
  {
    index: 5,
    value: "Bachelor's degree (three or more year post-secondary program)"
  },
  {
    index: 6,
    value:
      'Two or more post-secondary programs. One must be for a program of three or more years'
  },
  {
    index: 7,
    value:
      "Master's degree, or professional degree needed to practice in a licensed profession"
  },
  { index: 8, value: 'Doctoral level university degree (ph.d.)' }
];

// Now you can map through this array in your code
const age = Array(31).fill(0);
const EducationSelector = ({ field, label }) => {
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
          {selectorValues.map(({ value }, index) => {
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

export default EducationSelector;
