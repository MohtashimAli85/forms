import { post } from '@/services/axios';
import { useMutation } from '@tanstack/react-query';

const useSubmitForm = (url) => {
  return useMutation({
    mutationKey: [url],
    mutationFn: (payload) => post(url, payload)
  });
};

export default useSubmitForm;
