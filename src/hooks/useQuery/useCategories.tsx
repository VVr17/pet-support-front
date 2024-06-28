import { useQuery } from '@tanstack/react-query';

import { fetchCategories } from '@/api/categories';

import { QUERY_KEYS } from './queryKeys';

export const useCategories = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.categories],
    queryFn: fetchCategories,
    staleTime: 10 * 60 * 1000, // Stale time - 10 minutes
  });
};
