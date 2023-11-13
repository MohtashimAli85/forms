import { get } from '@/services/axios';
import { useQuery } from '@tanstack/react-query';

const useCountry = () => {
  return useQuery({
    queryKey: ['country'],
    queryFn: () => get('/country_currency'),
    staleTime: Infinity,
    retry: false
  });
};

export default useCountry;
