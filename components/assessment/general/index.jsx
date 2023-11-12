'use client';
import React, { useCallback, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import GeneralForm from './forms';
import useFormStep from '@/hooks/useFormStep';

const General = () => {
  const { currentStep, nextStep, goToStep } = useFormStep(0);
  const [formData, setFormData] = useState({
    personal_profile: {
      first_name: 'Mohtashim',
      last_name: 'Ali',
      email_address: 'mohtashima85@gmail.com',
      nationality: 'PK',
      age: '18',
      telephone: '03474692536',
      marital_status: 'married_commonlaw',
      children_under_22: false,
      current_country: 'PK'
    },
    education_training: {
      studied_in_canada: undefined,
      institute_name: '',
      highest_study_canada: '',
      programs_list: [
        {
          program_type: '',
          field: '',
          location: '',
          school_in_canada: '',
          program_completed: null
        }
      ]
    }
  });
  const [activeAccordion, setActiveAccordion] = useState(
    Array(5)
      .fill(false)
      .map((_, index) => index == 0)
  );
  const updateActiveAccordion = useCallback((index) => {
    setActiveAccordion((prev) => {
      const temp = [...prev];
      temp[index] = !prev[index];
      return temp;
    });
  }, []);

  const updateForm = useCallback((data, key) => {
    setFormData((prev) => ({ ...prev, [key]: data }));
  }, []);
  return (
    <>
      <Accordion type='single' className={''} collapsible value={'true'}>
        {GeneralForm.map(({ name, Form }, index) => (
          <AccordionItem
            value={String(index <= currentStep && activeAccordion[index])}
            key={name}
            disabled={!(index === currentStep) && index > currentStep}
          >
            <AccordionTrigger
              onClick={() => {
                updateActiveAccordion(index);
                updateActiveAccordion(index + 1);
              }}
            >
              {name}
            </AccordionTrigger>
            <AccordionContent>
              <Form
                nextStep={() => {
                  if (currentStep <= index) {
                    nextStep();
                  }
                  updateActiveAccordion(index);
                  updateActiveAccordion(index + 1);
                }}
                data={formData}
                updateForm={updateForm}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default General;
