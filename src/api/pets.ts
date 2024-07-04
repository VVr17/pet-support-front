import { api } from './config';

/**
 * Fetches a specific pet by its ID.
 *
 * @param petId - The ID of the Pet to fetch.
 * @returns A promise that resolves to the Pet data.
 */
export const getPetById = async (petId: string): Promise<Pet> => {
  const requestURL = `/pets/${petId}`;

  const response = await api.get(requestURL);
  return response.data.data;
};

/**
 * Posts a new pet to the server.
 *
 * @param petData - The data of the pet to post.
 * @returns A promise that resolves to the response data of the posted pet.
 */
export const postPet = async (petData: IPetData) => {
  const requestURL = `/pets`;

  const response = await api.post(requestURL, petData);
  return response.data;
};

/**
 * Updates an existing Pet with the given data.
 *
 * @param petId - The ID of the Pet to update.
 * @param petData - The updated data for the Pet.
 * @returns A promise that resolves to the response data of the updated Pet.
 */
export const updatePet = async (petId: string, petData: Partial<IPetData>) => {
  const requestURL = `/pets/${petId}`;

  const response = await api.put(requestURL, petData);
  return response.data;
};

/**
 * Deletes a pet by its ID.
 *
 * @param petId - The ID of the pet to delete.
 * @returns A promise that resolves to the response data of the deleted pet.
 */
export const deletePet = async (petId: string) => {
  const requestURL = `/pets/${petId}`;

  const response = await api.delete(requestURL);
  return response.data;
};
