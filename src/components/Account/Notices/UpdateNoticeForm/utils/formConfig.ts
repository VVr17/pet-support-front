import { yupResolver } from '@hookform/resolvers/yup';
import { Resolver, ValidationMode } from 'react-hook-form';

import { noticeDefaultValues } from '@/utils/forms/noticeDefaultValues';
import { updateNoticeSchema } from '@/utils/validation/noticeSchema';

export const formConfig = {
  resolver: yupResolver(updateNoticeSchema) as Resolver<NoticeForm>,
  mode: 'all' as keyof ValidationMode,
  defaultValues: noticeDefaultValues,
};
