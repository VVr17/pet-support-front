import { api } from './config';

/**
 * Fetches the list of categories from the API.
 *
 * @returns A promise that resolves to an array of categories.
 */
export const fetchCategories = async (): Promise<Category[]> => {
  const requestURL = 'categories';

  const response = await api.get(requestURL);
  return response.data.data;
};
