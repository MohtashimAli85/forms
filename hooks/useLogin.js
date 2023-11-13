import { post } from '@/services/axios';
import { useMutation } from '@tanstack/react-query';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import toast from 'react-simple-toasts';

const useLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationKey: ['login'],
    mutationFn: (payload) => post('/login', payload),
    onError: (error) => {
      console.log(error);
      toast(error.response?.data || error.message || 'Something went wrong');
    },
    onSuccess: (response) => {
      const { access_token, refresh_token } = response;
      setCookie('token', JSON.stringify({ access_token, refresh_token }));
      setCookie('user', JSON.stringify(response.user));

      router.push('/assessment/general');
    }
  });
};

export default useLogin;
