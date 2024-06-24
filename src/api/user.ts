import { api } from './config';

export const getCurrentUser = async (): Promise<User> => {
  const requestURL = `/users/me`;

  const response = await api.get(requestURL);
  return response.data.data;
};

export const updateUserData = async (userData: Partial<User>) => {
  const requestURL = `/users/me`;

  const response = await api.put(requestURL, userData);
  return response.data;
};

export const getMyNotices = async (): Promise<Notice[]> => {
  const requestURL = `/users/me/notices`;

  const response = await api.get(requestURL);
  return response.data.data;
};

export const getMyPets = async (): Promise<Pet[]> => {
  const requestURL = `/users/me/pets`;

  const response = await api.get(requestURL);
  return response.data.data;
};
