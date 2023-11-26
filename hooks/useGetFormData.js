import { get } from '@/services/axios';
import { useQuery } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import toast from 'react-simple-toasts';
const getUser = () => {
  try {
    return JSON.parse(getCookie('user'));
  } catch (err) {
    redirect('/auth/login');
    return null;
  }
};
const useGetFormData = (url, callback) => {
  const user = getUser();
  const query = useQuery({
    queryKey: [`data-${url}`],
    queryFn: () => get(`${url}?user_id=${user?.id}`),
    refetchOnWindowFocus:false
  });
  const { data, isSuccess, isError, isLoading }=query
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (isSuccess || typeof data === 'object') {
        console.log({ data });
        if (typeof data === 'object') callback({ ...data });else callback({});
      }
      if (isError) {
        toast('Error');
        return
      }
    }
    return () => {
      isMounted = false;
    };
  }, [isSuccess, isError, data]);
  return query;
};

export default useGetFormData;
