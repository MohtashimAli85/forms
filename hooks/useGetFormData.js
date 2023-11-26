'use client'
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
    console.error({err})
    // redirect('/auth/login');
    return null;
  }
};
const useGetFormData = (url, callback) => {
  const user = getUser();
  const query = useQuery({
    queryKey: [`data-${url}`],
    queryFn: () => get(`${url}?user_id=${user?.id}`),
    refetchOnWindowFocus: false,
    retry: false,
    enabled:!!user?.id
  });
  const { data, isSuccess, isError, isLoading, isFetching } = query;
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (isSuccess || typeof data === 'object') {
        console.log({ data });
        if (typeof data === 'object') callback({ ...data });
        else callback({});
      }
    }
    return () => {
      isMounted = false;
    };
  }, [isSuccess, data]);
  useEffect(() => {
    let isMounted = true;
    if (isError && isMounted && !isFetching) {
      toast('Error');
      return;
    }
    return () => {
      isMounted = false;
    };
  }, [isError, isFetching]);
  return query;
};

export default useGetFormData;
