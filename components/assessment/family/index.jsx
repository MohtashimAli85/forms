'use client';
import React, { useCallback, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import FamilyForm from './forms';
import useFormStep from '@/hooks/useFormStep';

const Family = () => {
  const { currentStep, nextStep, goToStep } = useFormStep(0);
  const [formData, setFormData] = useState({
    personal_profile: {
      first_name: 'Mohtashim',
      last_name: 'Ali',
      email_address: 'mohtashima85@gmail.com',
      nationality: 'PK',
      age: '18',
      to_do: 'sponsor_foreign_relative',
      telephone: '03474692536',
      marital_status: 'married_commonlaw',
      children_under_22: false,
      current_country: 'PK'
    },
    relative_information: {
      relative_name: 'p',
      relation_with_relative: 'spouse',
      social_assistance: true,
      citizen_or_resident: 'Permanent Resident',
      currently_residing_canada: false
    },
    other: {
      criminal_record: true,
      medication_required: false,
      comments: 'data'
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
  const closeActiveAccordions = useCallback((index) => {
    setActiveAccordion((prev) => {
      const temp = [...prev];
      return temp.map((value, i) => (i === index ? value : false));
    });
  });
  const updateForm = useCallback((data, key) => {
    setFormData((prev) => ({ ...prev, [key]: data }));
  }, []);
  console.log({ formData });
  return (
    <>
      <Accordion type='single' className={''} collapsible value={'true'}>
        {FamilyForm.map(({ name, Form }, index) => (
          <AccordionItem
            value={String(index <= currentStep && activeAccordion[index])}
            key={name}
            disabled={!(index === currentStep) && index > currentStep}
          >
            <AccordionTrigger
              onClick={() => {
                updateActiveAccordion(index);
                closeActiveAccordions(index);
                // updateActiveAccordion(index + 1);
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

export default Family;
