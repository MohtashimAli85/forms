import React from 'react';
import Selector from './Selector';
const proficiencyOptions = [
  'none',
  'beginner',
  'intermediate',
  'advanced',
  'expert'
];

const SkillLevelSelector = ({ field, label }) => {
  return <Selector field={field} label={label} list={proficiencyOptions} />;
};

export default SkillLevelSelector;
