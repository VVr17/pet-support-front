import { yupResolver } from '@hookform/resolvers/yup';
import { Resolver, ValidationMode } from 'react-hook-form';

import { petSchema } from '@/utils/validation/petSchema';
import dayjs from 'dayjs';

export const defaultValues = {
  name: '',
  breed: '',
  dateOfBirth: dayjs(Date.now()),
  image: '',
  comments: '',
};

export const formConfig = {
  resolver: yupResolver(petSchema) as Resolver<PetForm>,
  mode: 'all' as keyof ValidationMode,
  defaultValues: defaultValues,
};
