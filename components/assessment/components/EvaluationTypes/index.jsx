'use client';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';
const evalutionTypes = [
  {
    name: 'General Immigration',
    value: 'general'
  },
  {
    name: 'Business Immigration',
    value: 'business'
  },
  {
    name: 'Family Sponsorship',
    value: 'family'
  },
  {
    name: 'Study Visa',
    value: 'student'
  }
];
const EvaluationSteps = () => {
  const pathname = usePathname();
  const currentValue = pathname.split('/')[2];
  return (
    <ul className='flex gap-3 py-4 my-4'>
      {evalutionTypes.map(({ name, value }) => (
        <li key={value}>
          <Link
            href={value}
            className={`text-base p-2 outline rounded-md   ${
              currentValue === value ? 'text-blue-500 outline-blue-500' : ''
            }`}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default EvaluationSteps;
