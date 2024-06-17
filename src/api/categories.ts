import { api } from "./config";

export const fetchCategories = async () => {
  const requestURL = "categories";

  const response = await api.get(requestURL);
  return response.data as CategoryResponse;
};
