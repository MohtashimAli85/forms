import React from 'react';
import { Button } from '../button';
import Loader from '../loader';

const SubmitBtn = ({ isLoading }) => {
  return <Button type='submit'>Submit {isLoading && <Loader />}</Button>;
};

export default SubmitBtn;
