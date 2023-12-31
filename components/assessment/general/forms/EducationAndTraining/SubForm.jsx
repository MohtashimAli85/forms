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
  FormLabel
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useFieldArray } from 'react-hook-form';
import SchoolInput from './SchoolInput';
import { programsList } from './utils'; // Adjust the import paths based on your project structure
const Selectors = {
  program_type: EducationSelector,
  field: StudyFieldsSelector,
  location: LocationSelector
};
const Selector = ({ name, field, label }) => {
  const Selector = Selectors[name];
  if (Selector) return <Selector field={field} />;
  return <></>;
};
const ProgramList = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'programs_list'
  });
  const errors = control._formState.errors;
  return (
    <>
      <div className='p-2 m-2 space-y-3 [&+p]:'>
        <div className='space-y-3'>
          {fields.map(({ id, ...values }, index) => (
            <div key={id} className='space-y-2'>
              {programsList.map(({ name, label, type }) => (
                <FormField
                  key={name}
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormControl>
                          <>
                            {type == 'radio' ? (
                              <>
                                <FormLabel>{label}</FormLabel>
                                <YesNoRadio field={field} />
                              </>
                            ) : type == 'select' ? (
                              <>
                                <FormLabel>{label}</FormLabel>
                                <Selector
                                  name={name}
                                  field={field}
                                  label={label}
                                />
                              </>
                            ) : name == 'school_in_canada' ? (
                              <>
                                <SchoolInput
                                  label={label}
                                  name={`programs_list.${index}.location`}
                                  field={field}
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
                  name={`programs_list.${index}.${name}`}
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

export default ProgramList;
