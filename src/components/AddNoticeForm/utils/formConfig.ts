import { yupResolver } from '@hookform/resolvers/yup';
import dayjs from 'dayjs';
import { Resolver, ValidationMode } from 'react-hook-form';

import { noticeSchema } from '@/utils/validation/noticeSchema';

export const noticeDefaultValues = {
  // First step
  title: '',
  name: '',
  breed: '',
  dateOfBirth: dayjs(Date.now()),
  location: '',

  // Second step
  sex: 0 as Sex,
  categoryId: '',
  price: 0,

  // Third step
  image: '',

  // Fourth step
  comments: '',
};

export const formConfig = {
  resolver: yupResolver(noticeSchema) as Resolver<NoticeForm>,
  mode: 'all' as keyof ValidationMode,
  defaultValues: noticeDefaultValues,
};
