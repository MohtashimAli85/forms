import { post } from '@/services/axios';
import { useMutation } from '@tanstack/react-query';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import toast from 'react-simple-toasts';

const useRegister = () => {
  const router = useRouter();
  return useMutation({
    mutationKey: ['register'],
    mutationFn: (payload) => post('/register', payload),
    onError: (error) => {
      toast(
        error.response?.data?.username?.[0] ||
          error.message ||
          'Something went wrong'
      );
    },
    onSuccess: (response) => {
      setCookie('token', JSON.stringify(response));
      router.push('/assessment/general');
    }
  });
};

export default useRegister;
