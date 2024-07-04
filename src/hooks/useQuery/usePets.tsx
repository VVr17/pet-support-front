import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { deletePet, getPetById, postPet, updatePet } from '@/api/pets';

import { QUERY_KEYS } from './queryKeys';

export const usePetDetails = (petId: string | null) => {
  return useQuery({
    queryKey: [QUERY_KEYS.petById, petId],
    queryFn: () => (petId ? getPetById(petId) : undefined),
    enabled: !!petId,
  });
};

export const useAddPet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postPet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.myPets] });
    },
  });
};

export const useUpdatePet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      petId,
      petData,
    }: {
      petId: string;
      petData: Partial<IPetData>;
    }) => updatePet(petId, petData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.myPets],
      });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.petById] });
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
