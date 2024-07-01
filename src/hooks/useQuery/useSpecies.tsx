import { useQuery } from '@tanstack/react-query';

import { fetchSpecies } from '@/api/species';

import { QUERY_KEYS } from './queryKeys';

export const useSpecies = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.species],
    queryFn: fetchSpecies,
    staleTime: 10 * 60 * 1000, // Stale time - 10 minutes
  });
};
