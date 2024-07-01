import { api } from './config';

// ------------- Current user -------------
/**
 * Fetches the current user's data.
 *
 * @returns A promise that resolves to the current user's data.
 */
export const getCurrentUser = async (): Promise<User> => {
  const requestURL = `/users/me`;

  const response = await api.get(requestURL);
  return response.data.data;
};

/**
 * Updates the current user's data.
 *
 * @param userData - The updated data for the current user.
 * @returns A promise that resolves to the response data.
 */
export const updateUserData = async (userData: Partial<User>) => {
  const requestURL = `/users/me`;

  const response = await api.put(requestURL, userData);
  return response.data;
};

// ------------ User's notices ------------------

/**
 * Fetches the current user's notices.
 *
 * @returns A promise that resolves to an array of the user's notices.
 */
export const getMyNotices = async (): Promise<Notice[]> => {
  const requestURL = `/users/me/notices`;

  const response = await api.get(requestURL);
  return response.data.data;
};

// ---------- User's pets ------------------------
/**
 * Fetches the current user's pets.
 *
 * @returns A promise that resolves to an array of the user's pets.
 */
export const getMyPets = async (): Promise<Pet[]> => {
  const requestURL = `/users/me/pets`;

  const response = await api.get(requestURL);
  return response.data.data;
};

// ---------- Favorite notices ----------------
/**
 * Fetches the current user's favorite notices.
 *
 * @returns A promise that resolves to an array of the user's favorite notices.
 */
export const getMyFavoriteNotices = async (): Promise<Notice[]> => {
  const requestURL = `/users/me/favorites`;

  const response = await api.get(requestURL);
  return response.data.data;
};

/**
 * Adds a notice to the user's favorites.
 *
 * @param noticeId - The ID of the notice to add to favorites.
 * @returns A promise that resolves to the response data.
 */
export const addToFavorites = async (noticeId: string) => {
  const requestURL = `/users/me/favorites/${noticeId}`;

  const response = await api.post(requestURL);
  return response.data;
};

/**
 * Removes a notice from the user's favorites.
 *
 * @param noticeId - The ID of the notice to remove from favorites.
 * @returns A promise that resolves to the response data.
 */
export const removeFromFavorites = async (noticeId: string) => {
  const requestURL = `/users/me/favorites/${noticeId}`;

  const response = await api.delete(requestURL);
  return response.data;
};
