import React from 'react';
import { Button } from '../button';
import Loader from '../loader';
import clsx from 'clsx';

const SubmitBtn = ({ isLoading, className }) => {
  return (
    <Button type='submit' className={clsx('gap-2   min-w-[100px]', className)}>
      {!isLoading ? 'Submit' : <Loader />}
    </Button>
  );
};

export default SubmitBtn;
