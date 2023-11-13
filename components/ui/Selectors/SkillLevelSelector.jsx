import React from 'react';
import Selector from './Selector';
import { useWatch } from 'react-hook-form';
const proficiencyOptions = [
  'none',
  'beginner',
  'intermediate',
  'advanced',
  'expert'
];

const SkillLevelSelector = ({ field, label }) => {
  const second_language = useWatch({ name: 'second_official_language' });
  const isSecond = field.name.includes('second');
  if (
    (!second_language || second_language?.toLowerCase() === 'none') &&
    isSecond
  )
    return null;
  return <Selector field={field} label={label} list={proficiencyOptions} />;
};

export default SkillLevelSelector;
