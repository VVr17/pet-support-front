import { api } from './config';

export const fetchCategories = async (): Promise<Category[]> => {
  const requestURL = 'categories';

  const response = await api.get(requestURL);
  return response.data.data;
};
