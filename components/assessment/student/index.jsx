'use client';
import React, { useCallback, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import StudentForm from './forms';
import useFormStep from '@/hooks/useFormStep';

const Student = () => {
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
      post_secondary_education: false,
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
    },
    work_experience: {
      paid_work_experience: false,
      work_experiences: [{}]
    },
    canadian_Language_proficiency: {
      first_language: 'English',
      first_language_read: 'beginner',
      first_language_write: 'beginner',
      first_language_speak: 'beginner',
      first_language_listen: 'intermediate',
      second_language: 'English',
      second_language_read: 'beginner',
      second_language_write: 'beginner',
      second_language_speak: 'beginner',
      second_language_listen: 'beginner'
    },
    others: {
      skills_outside_canada: '1 or 2 years',
      skills_inside_canada: '1 year',
      certificate_qualification: true,
      certificate_nomination: true,
      valid_job: true,
      senior_managerial_role: true,
      siblings: true,
      relative_in_canada: true,
      criminal_record: true,
      bad_medical_condition: true
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
        {StudentForm.map(({ name, Form }, index) => (
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

export default Student;
