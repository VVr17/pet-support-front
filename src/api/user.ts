import { api } from './config';

// ------------- Current user -------------
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

// ------------ User's notices ------------------
export const getMyNotices = async (): Promise<Notice[]> => {
  const requestURL = `/users/me/notices`;

  const response = await api.get(requestURL);
  return response.data.data;
};

// ---------- User's pets ------------------------
export const getMyPets = async (): Promise<Pet[]> => {
  const requestURL = `/users/me/pets`;

  const response = await api.get(requestURL);
  return response.data.data;
};

// ---------- Favorite notices ----------------
export const getMyFavoriteNotices = async (): Promise<Notice[]> => {
  const requestURL = `/users/me/favorites`;

  const response = await api.get(requestURL);
  return response.data.data;
};

export const addToFavorites = async (noticeId: string) => {
  const requestURL = `/users/me/favorites/${noticeId}`;

  const response = await api.post(requestURL);
  return response.data;
};

export const removeFromFavorites = async (noticeId: string) => {
  const requestURL = `/users/me/favorites/${noticeId}`;

  const response = await api.delete(requestURL);
  return response.data;
};
