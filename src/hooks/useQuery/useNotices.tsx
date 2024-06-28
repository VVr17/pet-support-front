import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  deleteNotice,
  fetchNotices,
  getNoticeById,
  postNotice,
  updateNotice,
} from '@/api/notices';
import { DEFAULT_PER_PAGE, FIRST_PAGE } from '@/utils/constants/notices';

import { QUERY_KEYS } from './queryKeys';

export const useNotices = ({
  categoryId,
  page = FIRST_PAGE,
  limit = DEFAULT_PER_PAGE,
}: {
  categoryId: string | undefined | null;
  page?: number;
  limit?: number;
}) => {
  return useQuery({
    queryKey: [QUERY_KEYS.notices, categoryId, page],
    queryFn: () =>
      categoryId ? fetchNotices(categoryId, page, limit) : undefined,
    enabled: !!categoryId, // Enables only when category id provided
  });
};

export const useNoticeDetails = (noticeId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.noticeById, noticeId],
    queryFn: () => getNoticeById(noticeId),
    enabled: !!noticeId,
  });
};

export const useAddNotice = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postNotice,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.notices] });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.myNotices],
      });
    },
  });
};

export const useUpdateNotice = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      noticeId,
      noticeData,
    }: {
      noticeId: string;
      noticeData: Partial<INoticeData>;
    }) => updateNotice(noticeId, noticeData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.notices] });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.myNotices],
      });
    },
  });
};

export const useDeleteNotice = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteNotice,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.notices],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.myNotices],
      });
    },
  });
};
