import { api } from './config';

export const uploadFile = async (
  formData: FormData,
): Promise<{ url: string }> => {
  const requestURL = `/files/upload`;

  const response = await api.post(requestURL, formData);
  return response.data;
};
