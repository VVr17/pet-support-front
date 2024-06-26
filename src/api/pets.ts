import { api } from './config';

export const postPet = async (petData: IPetData) => {
  const requestURL = `/pets`;

  const response = await api.post(requestURL, petData);
  return response.data;
};

export const deletePet = async (petId: string) => {
  const requestURL = `/pets/${petId}`;

  const response = await api.delete(requestURL);
  return response.data;
};
