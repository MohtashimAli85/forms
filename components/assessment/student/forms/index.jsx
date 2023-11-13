import CanadianLanguageProficiency from '../../general/forms/CanadianLanguageProficiency';
import EducationPrograms from './EducationPrograms';
import Other from './Other';
import PersonalProfile from './PersonalProfile';
const GeneralForm = [
  {
    name: 'Your Personal Profile',
    Form: PersonalProfile
  },
  {
    name: 'Education Programs',
    Form: EducationPrograms
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
