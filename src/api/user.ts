import { api } from "./config";

export const getCurrentUser = async (): Promise<User> => {
  const requestURL = `/users/me`;

  const response = await api.get(requestURL);
  return response.data.data;
};
