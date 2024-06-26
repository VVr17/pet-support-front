import { uploadFile } from '@/api/files';

// Uploads image file to storage
export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await uploadFile(formData);
  return response.url;
};
