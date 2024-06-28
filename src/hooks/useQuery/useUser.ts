import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  getCurrentUser,
  getMyNotices,
  getMyPets,
  updateUserData,
} from '@/api/user';

import { QUERY_KEYS } from './queryKeys';

export const useUser = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.user],
    queryFn: getCurrentUser,
    enabled: false, // Initially disable the query, will be manually triggered manually
    retry: false, // Disable retry before set error - enable only one request
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUserData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.user] });
    },
  });
};

export const useMyNotices = (userId?: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.myNotices, userId],
    queryFn: getMyNotices,
    enabled: !!userId,
  });
};

export const useMyPets = (userId?: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.myPets, userId],
    queryFn: getMyPets,
    enabled: !!userId,
  });
};
