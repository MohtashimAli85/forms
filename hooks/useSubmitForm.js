import { post } from '@/services/axios'
import { useMutation } from '@tanstack/react-query'
import { getCookie } from 'cookies-next'
import toast from 'react-simple-toasts'
const getUser = () => {
  try {
    return JSON.parse(getCookie('user'));
  } catch (err) {
    console.error({ err });
    // redirect('/auth/login');
    return null;
  }
};
const useSubmitForm = (url) => {
  const user = getUser();
  // const queryClient = useQueryClient();
  // const data = queryClient.getQueryData([`data-${url}`]);
  return useMutation({
    mutationKey: [url],
    mutationFn: (payload) => post(url, { user_id: user?.id, ...payload }),
    onError: (resp) => {
      console.log({ resp });
      toast('Error');
    },
    onSuccess: () => {
      toast('Form Submitted successfully');
    }
  });
};

export default useSubmitForm;
