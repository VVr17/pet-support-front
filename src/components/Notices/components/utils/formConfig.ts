import { yupResolver } from '@hookform/resolvers/yup';
import { Resolver, ValidationMode } from 'react-hook-form';

import { defaultPriceRange } from '@/utils/constants/notices';
import { noticeFilterSchema } from '@/utils/validation/noticeFilterSchema';

export const defaultValues = {
  species: [],
  gender: [],
  price: [defaultPriceRange.minPrice, defaultPriceRange.maxPrice],
};

export const formConfig = {
  resolver: yupResolver(noticeFilterSchema) as Resolver<NoticeFilterForm>,
  mode: 'all' as keyof ValidationMode,
  defaultValues: defaultValues,
};
