import { get } from '@/services/axios';
import { useQuery } from '@tanstack/react-query';

const useStudyFields = () => {
  return useQuery({
    queryKey: ['study_fields'],
    queryFn: () => get('/study_fields'),
    refetchOnWindowFocus: false,
    staleTime: Infinity
  });
};

export default useStudyFields;
