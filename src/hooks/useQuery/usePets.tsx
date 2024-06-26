import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { deletePet, postPet } from '@/api/pets';

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
