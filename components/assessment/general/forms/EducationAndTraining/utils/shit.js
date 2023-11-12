const ProgramSchemaOptional = z
  .object({
    program_type: z.string().optional(),
    field: z.string().optional(),
    location: z.string().optional(),
    school_in_canada: z.string().optional(),
    program_completed: z.boolean().nullable().optional()
  })
  .refine(
    (data) => {
      if (data.location === 'outside canada') return true;
      return !!data.school_in_canada;
    },
    {
      path: ['school_in_canada'],
      message: 'required'
    }
  )
  .refine((data) => !!data.location, {
    path: ['location'],
    message: 'required'
  })
  .refine((data) => !!data.field, {
    path: ['field'],
    message: 'required'
  })
  .refine((data) => !!data.program_type, {
    path: ['program_type'],
    message: 'required'
  })
  .refine((data) => data.program_completed !== null, {
    path: ['program_completed'],
    message: 'required'
  });

const FormSchema = z.object({
  post_secondary_education: z.boolean(),
  studied_in_canada: z.boolean().optional(),
  institute_name: z.string().optional(),
  canadian_school: z.string().optional(),
  highest_study_canada: z.string().optional(),
  highest_study_level: z.string().optional(),

  programs_list: z.array(ProgramSchemaOptional).optional()
});

// Refinement outside the main schema
const FinalFormSchema = FormSchema.refine(
  (data) => !data.post_secondary_education || data.institute_name?.trim(),
  {
    path: ['institute_name'],
    message: 'Required'
  }
)
  .refine(
    (data) =>
      !data.post_secondary_education || data.canadian_school !== undefined,
    {
      path: ['canadian_school'],
      message: 'Required'
    }
  )
  .refine(
    (data) =>
      !data.post_secondary_education || data.studied_in_canada !== undefined,
    {
      path: ['studied_in_canada'],
      message: 'Required'
    }
  )
  .refine(
    (data) => {
      console.log({ data });
      return !data.post_secondary_education || !!data.highest_study_level;
    },
    {
      path: ['highest_study_level'],
      message: 'Required'
    }
  )
  .refine(
    (data) => {
      console.log({ data });
      return !data.post_secondary_education || !!data.highest_study_canada;
    },
    {
      path: ['highest_study_canada'],
      message: 'Required'
    }
  )
  .refine(
    (data) => {
      return !data.post_secondary_education || data.programs_list.length > 0;
    },
    {
      path: ['programs_list'],
      message: 'Minimum one Program is required'
    }
  );
