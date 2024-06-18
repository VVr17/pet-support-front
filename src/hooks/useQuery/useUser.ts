import { useQuery } from "@tanstack/react-query";

import { getCurrentUser } from "@/api/user";

import { QUERY_KEYS } from "./queryKeys";

export const useUser = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.user],
    queryFn: getCurrentUser,
    enabled: false, // Initially disable the query, will be manually triggered manually
    retry: 1, // Retry one time before set error
  });
};
