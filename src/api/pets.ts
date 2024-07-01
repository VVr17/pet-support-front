import { api } from './config';

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
