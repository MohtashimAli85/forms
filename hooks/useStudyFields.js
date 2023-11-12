import { get } from '@/services/axios';
import { useQuery } from '@tanstack/react-query';

const useStudyFields = () => {
  return useQuery({
    queryKey: ['study_fields'],
    queryFn: () => get('/study_fields'),
    refetchOnWindowFocus: false
  });
};

export default useStudyFields;
