import ManagementExperience from './ManagementExpeirence';
import Other from './Other';
import PersonalNetWorth from './PersonalNetWorth';
import PersonalProfile from './PersonalProfile';
const BusinessForm = [
  {
    name: 'Your Personal Profile',
    Form: PersonalProfile
  },
  {
    name: 'Your Personal Net Worth',
    Form: PersonalNetWorth
  },
  {
    name: 'Your management experience',
    Form: ManagementExperience
  },
  {
    name: 'Other',
    Form: Other
  }
];

export default BusinessForm;
