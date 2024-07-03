/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Converts a Data URI to a File object.
 *
 * @param dataURI - The Data URI string to convert.
 * @param fileName - The desired file name for the resulting File object.
 * @returns A File object created from the Data URI.
 */
export const dataURItoFile = (dataURI: any, fileName: string) => {
  // Decode the base64-encoded data portion of the Data URI
  const byteString = atob(dataURI.split(',')[1]);
  // Create an ArrayBuffer to hold the decoded binary data
  const arrayBuffer = new ArrayBuffer(byteString.length);
  // Create a Uint8Array view of the ArrayBuffer for byte-level access
  const int8Array = new Uint8Array(arrayBuffer);

  // Iterate through each character of the byteString and assign values to the Uint8Array
  for (let i = 0; i < byteString.length; i++) {
    int8Array[i] = byteString.charCodeAt(i);
  }

  // Create a Blob from the Uint8Array with the specified MIME type (image/jpeg in this case)
  const blob = new Blob([int8Array], { type: 'image/jpeg' });

  // Create a File object from the Blob with the specified file name
  return new File([blob], fileName, { type: 'image/jpeg' });
};
