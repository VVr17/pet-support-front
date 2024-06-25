// import { Resolver, ValidationMode } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { noticeSchema } from '@/utils/validation/noticeSchema';

export const dealerDefaultValues = {
  // First step
  title: '',
  name: '',
  breed: '',
  dateOfBirth: '',

  // Second step
  sex: 0 as Sex,
  categoryId: '',
  price: null,

  // Third step
  image: '',

  // Fourth step
  location: '',
  comments: '',
};

export const formConfig = {
  // resolver: yupResolver(noticeSchema) as Resolver<NoticeForm>,
  // mode: 'all' as keyof ValidationMode,
  defaultValues: dealerDefaultValues,
};
