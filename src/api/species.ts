import { api } from './config';

/**
 * Fetches the list of species from the API.
 *
 * @returns A promise that resolves to an array of species.
 */
export const fetchSpecies = async (): Promise<Species[]> => {
  const requestURL = 'species';

  const response = await api.get(requestURL);
  return response.data.data;
};
