import { useQuery } from "@tanstack/react-query";

import { fetchNotices } from "@/api/notices";
import { DEFAULT_PER_PAGE, FIRST_PAGE } from "@/utils/constants/notices";

import { QUERY_KEYS } from "./queryKeys";

export const useNotices = ({
  categoryId,
  page = FIRST_PAGE,
  limit = DEFAULT_PER_PAGE,
}: {
  categoryId: string | undefined;
  page?: number;
  limit?: number;
}) => {
  return useQuery({
    queryKey: [QUERY_KEYS.notices, categoryId, page],
    queryFn: () =>
      categoryId ? fetchNotices(categoryId, page, limit) : undefined,
    enabled: !!categoryId,
  });
};
