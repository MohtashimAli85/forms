import React from 'react';
import EvaluationSteps from '../components/EvaluationTypes';

const AssessmentLayout = ({ children }) => {
  return (
    <>
      <h1 className='text-3xl'>Choose your evaluation form</h1>
      <EvaluationSteps />

      {children}
    </>
  );
};

export default AssessmentLayout;
