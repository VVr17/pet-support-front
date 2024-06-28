import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { deleteNotice, fetchNotices, postNotice } from '@/api/notices';
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
