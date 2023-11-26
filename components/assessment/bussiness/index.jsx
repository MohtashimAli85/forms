'use client';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import BusinessForm from './forms';
import useFormStep from '@/hooks/useFormStep';
import useGetFormData from '@/hooks/useGetFormData';
import Loader from '@/components/ui/loader';
import { Badge } from '@/components/ui/badge'

const Business = () => {
  const { currentStep, nextStep,goToStep } = useFormStep(0);

  const [formData, setFormData] = useState(null);
  const { isLoading,isError } = useGetFormData('/business_immigration', setFormData);
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
  const status=formData?.status
  useEffect(()=>{
    if(status){
      goToStep(BusinessForm.length-1)
    }
  },[status])
  if(isError) return <p>Something went wrong. Please try later or ask for support.</p>

  return (
    <>
      {isLoading||formData===null? (
        <Loader />
      ) : (
        <>
        {formData?.status&&<Badge className={'capitalize'}>{formData?.status}</Badge>}
        <Accordion type='single' className={''} collapsible value={'true'} >
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
      )}
    </>
  );
};

export default Business;
