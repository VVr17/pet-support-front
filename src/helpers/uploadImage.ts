import { uploadFile } from '@/api/files';

/**
 * Uploads a file (image) using FormData and returns the uploaded file's URL.
 *
 * @param file - The File object (image) to upload.
 * @returns A Promise that resolves to the URL of the uploaded file.
 */
export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await uploadFile(formData);
  return response.url;
};
