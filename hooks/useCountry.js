import { API_URL } from '@/services/axios';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
export async function get(url, config = {}) {
  return axios
    .get(`${API_URL}${url}`, { ...config })
    .then((response) => response.data);
}
const useCountry = () => {
  return useQuery({
    queryKey: ['country'],
    queryFn: () => get('/country_currency'),
    staleTime: Infinity,
    retry: false
  });
};

export default useCountry;
