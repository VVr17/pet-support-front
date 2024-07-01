import { api } from './config';

/**
 * Uploads a file to the server.
 *
 * @param formData - The form data containing the file to be uploaded.
 * @returns A promise that resolves to an object containing the URL of the uploaded file.
 */
export const uploadFile = async (
  formData: FormData,
): Promise<{ url: string }> => {
  const requestURL = `/files/upload`;

  const response = await api.post(requestURL, formData);
  return response.data;
};
