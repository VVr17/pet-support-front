import { yupResolver } from '@hookform/resolvers/yup';
import { Resolver, ValidationMode } from 'react-hook-form';

import { avatarSchema } from '@/utils/validation/userSchema';

export const defaultValues = {
  avatar: '',
};

export const formConfig = {
  resolver: yupResolver(avatarSchema) as Resolver<AvatarForm>,
  mode: 'all' as keyof ValidationMode,
  defaultValues: defaultValues,
};
