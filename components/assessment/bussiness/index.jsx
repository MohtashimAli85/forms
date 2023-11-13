'use client';
import React, { useCallback, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import BusinessForm from './forms';
import useFormStep from '@/hooks/useFormStep';

const Business = () => {
  const { currentStep, nextStep, goToStep } = useFormStep(0);
  const [formData, setFormData] = useState({
    personal_profile: {
      first_name: 'Mohtashim',
      last_name: 'Ali',
      email_address: 'mohtashima85@gmail.com',
      nationality: 'PK',
      telephone: '03474692536',
      current_country: 'PK'
    },
    personal_net_worth: {
      net_worth: 'more than 1999',
      currency: 'PKR'
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
        {BusinessForm.map(({ name, Form }, index) => (
          <AccordionItem
            value={String(index <= currentStep && activeAccordion[index])}
            key={name}
            disabled={!(index === currentStep) && index > currentStep}
          >
            <AccordionTrigger
              onClick={() => {
                updateActiveAccordion(index);
                closeActiveAccordions(index);
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

export default Business;
