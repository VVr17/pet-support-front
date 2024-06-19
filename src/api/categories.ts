import { api } from "./config";

export const fetchCategories = async (): Promise<CategoryResponse> => {
  const requestURL = "categories";

  const response = await api.get(requestURL);
  return response.data;
};
