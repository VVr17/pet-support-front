import { api } from "./config";

export const fetchNotices = async (
  categoryId: string,
  page: number,
  limit: number
) => {
  const requestURL = `notices?category=${categoryId}&page=${page}&limit=${limit}`;

  const response = await api.get(requestURL);
  return response.data as NoticesResponse;
};
