import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deletePet, postPet } from '@/api/pets';

import { QUERY_KEYS } from './queryKeys';

export const useAddPet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postPet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.myPets] });
    },
  });
};

export const useDeletePet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.myPets] });
    },
  });
};
