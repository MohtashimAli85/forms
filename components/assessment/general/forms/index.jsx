import CanadianLanguageProficiency from './CanadianLanguageProficiency';
import EducationAndTraining from './EducationAndTraining';
import Other from './Other';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
const GeneralForm = [
  {
    name: 'Your Personal Profile',
    Form: PersonalProfile
  },
  {
    name: 'Your Education And Training',
    Form: EducationAndTraining
  },
  {
    name: 'Your Work Experience',
    Form: WorkExperience
  },
  {
    name: 'Canadian Language Proficiency',
    Form: CanadianLanguageProficiency
  },
  {
    name: 'Other',
    Form: Other
  }
];

export default GeneralForm;
