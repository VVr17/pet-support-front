import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  addToFavorites,
  getMyFavoriteNotices,
  removeFromFavorites,
} from '@/api/user';

import { QUERY_KEYS } from './queryKeys';

export const useMyFavorites = (userId?: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.myFavorites, userId],
    queryFn: getMyFavoriteNotices,
    enabled: !!userId,
    staleTime: 10 * 60 * 1000, // Stale time - 10 minutes
  });
};

export const useAddToFavorites = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addToFavorites,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.myFavorites] });
    },
  });
};

export const useRemoveFromFavorites = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeFromFavorites,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.myFavorites] });
    },
  });
};
