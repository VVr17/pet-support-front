import { api } from "./config";

export const fetchNotices = async (categoryId: string) => {
  const requestURL = `notices?category=${categoryId}`;

  const response = await api.get(requestURL);
  return response.data as NoticesResponse;
};
