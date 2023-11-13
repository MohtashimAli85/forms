import { post } from '@/services/axios';
import { useMutation } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';
import toast from 'react-simple-toasts';
const user = JSON.parse(getCookie('user'));
const useSubmitForm = (url) => {
  console.log({ token });
  return useMutation({
    mutationKey: [url],
    mutationFn: (payload) => post(url, { user_id: user?.id, ...payload }),
    onError: (resp) => {
      console.log({ resp });
      toast('Error');
    }
  });
};

export default useSubmitForm;
