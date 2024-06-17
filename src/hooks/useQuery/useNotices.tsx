import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./queryKeys";
import { fetchNotices } from "@/api/notices";

export const useNotices = (categoryId: string | undefined) => {
  return useQuery({
    queryKey: [QUERY_KEYS.notices, categoryId],
    queryFn: () => (categoryId ? fetchNotices(categoryId) : undefined),
    enabled: !!categoryId,
  });
};
