import useStudyFields from '@/hooks/useStudyFields';
import Combobox from '../combobox';
import { memo } from 'react';

const StudyFieldsSelector = ({ field, label }) => {
  const { data, isLoading } = useStudyFields();
  console.log({ data });
  if (isLoading) return <></>;
  const list = data?.map((value) => ({
    value: value.fields.toLowerCase(),
    label: value.fields
  }));
  console.log({ list, field });
  return (
    <div>
      <Combobox list={list} value={field.value} setValue={field.onChange} />
    </div>
  );
};

export default StudyFieldsSelector;
