// ProgramList.jsx
import YesNoRadio from '@/components/ui/Radios/YesNoRadio';
import EducationSelector from '@/components/ui/Selectors/EducationSelector';
import LocationSelector from '@/components/ui/Selectors/LocationSelector';
import StudyFieldsSelector from '@/components/ui/Selectors/StudyFieldsSelector';
import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useFieldArray } from 'react-hook-form';
import { workExperienceList } from './utils'; // Adjust the import paths based on your project structure
import EmploymentSelector from '@/components/ui/Selectors/EmploymentSelector';
import YearSelector from '@/components/ui/Selectors/YearSelector';
import DurationSelector from '@/components/ui/Selectors/DurationSelector';
const Selectors = {
  location: LocationSelector,
  employment_type: EmploymentSelector,
  job_start_year: YearSelector,
  job_end_year: YearSelector,
  job_duration: DurationSelector
};
const Selector = ({ name, field, label }) => {
  const Selector = Selectors[name];
  if (Selector) return <Selector field={field} />;
  return <></>;
};
const SubFields = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'work_experiences'
  });
  return (
    <>
      <div className='p-2 m-2 space-y-3 [&+p]:'>
        <div className='space-y-3'>
          {fields.map(({ id, ...values }, index) => (
            <div key={id} className='space-y-2'>
              {workExperienceList.map(({ name, label, type }) => (
                <FormField
                  key={name}
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormControl>
                          <>
                            {type == 'select' ? (
                              <>
                                <FormLabel>{label}</FormLabel>
                                <Selector
                                  name={name}
                                  field={field}
                                  label={label}
                                />
                              </>
                            ) : (
                              <>
                                <FormLabel>{label}</FormLabel>
                                <Input type={type} {...field} />
                              </>
                            )}
                          </>
                        </FormControl>
                      </FormItem>
                    );
                  }}
                  name={`work_experiences.${index}.${name}`}
                  control={control}
                />
              ))}
              {index !== 0 && (
                <button
                  type='button'
                  onClick={() => {
                    if (index !== 0) remove(index);
                  }}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
        {/* Button to add more program fields */}
        <Button
          type='button'
          onClick={() => {
            append({
              program_type: '',
              field: '',
              location: '',
              school_in_canada: '',
              program_completed: null
            });
          }}
        >
          Add Program
        </Button>
      </div>
    </>
  );
};

export default SubFields;
