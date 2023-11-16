import EvaluationSteps from '../components/EvaluationTypes'
import LogoutButton from './LogoutButton'

const AssessmentLayout = ({ children }) => {
  
  return (
    <>
    <div className='flex justify-between'>

      <h1 className='text-3xl'>Choose your evaluation form</h1>
      <LogoutButton/>
    </div>
      <EvaluationSteps />

      {children}
    </>
  );
};

export default AssessmentLayout;
