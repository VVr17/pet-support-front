import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./queryKeys";
import { fetchCategories } from "@/api/categories";

export const useCategories = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.categories],
    queryFn: fetchCategories,
  });
};
