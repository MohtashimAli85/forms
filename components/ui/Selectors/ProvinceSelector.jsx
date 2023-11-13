import React from 'react';
import Selector from './Selector';

const ProvinceSelector = ({ field, label }) => {
  return <Selector list={residing_province} field={field} label={label} />;
};
const residing_province = [
  { name: 'Alberta', value: 'Alberta' },
  { name: 'British Columbia', value: 'British Columbia' },
  { name: 'Manitoba', value: 'Manitoba' },
  { name: 'New Brunswick', value: 'New Brunswick' },
  { name: 'Newfoundland and Labrador', value: 'Newfoundland and Labrador' },
  { name: 'Northwest Territories', value: 'Northwest Territories' },
  { name: 'Nova Scotia', value: 'Nova Scotia' },
  { name: 'Nunavut', value: 'Nunavut' },
  { name: 'Ontario', value: 'Ontario' },
  { name: 'Prince Edward Island', value: 'Prince Edward Island' },
  { name: 'Quebec', value: 'Quebec' },
  { name: 'Saskatchewan', value: 'Saskatchewan' },
  { name: 'Yukon', value: 'Yukon' }
];
export default ProvinceSelector;
