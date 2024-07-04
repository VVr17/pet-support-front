import { yupResolver } from '@hookform/resolvers/yup';
import dayjs from 'dayjs';
import { Resolver, ValidationMode } from 'react-hook-form';

import { createPetSchema, updatePetSchema } from '@/utils/validation/petSchema';

export const defaultValues = {
  name: '',
  breed: '',
  dateOfBirth: dayjs(Date.now()),
  image: '',
  comments: '',
};

export const getFormConfig = (petId?: string) => {
  return {
    resolver: yupResolver(
      petId ? updatePetSchema : createPetSchema,
    ) as Resolver<PetForm>,
    mode: 'all' as keyof ValidationMode,
    defaultValues: defaultValues,
  };
};
