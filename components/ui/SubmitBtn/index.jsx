import React from 'react';
import { Button } from '../button';
import Loader from '../loader';

const SubmitBtn = ({ isLoading }) => {
  return (
    <Button type='submit' className='gap-2   min-w-[100px]'>
      {!isLoading ? 'Submit' : <Loader />}
    </Button>
  );
};

export default SubmitBtn;
