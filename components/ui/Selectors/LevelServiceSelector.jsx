import React from 'react';
import Selector from './Selector';

const LevelServiceSelector = ({ field, label }) => {
  return <Selector list={levelService} field={field} label={label} />;
};
const levelService = [
  {
    name: 'I am looking for full assistance to apply for a study permit',
    value: 'full_assistance'
  },
  { name: 'I would like to ask a couple of questions', value: 'questions' },
  { name: 'Not sure', value: 'not_sure' }
];
export default LevelServiceSelector;
