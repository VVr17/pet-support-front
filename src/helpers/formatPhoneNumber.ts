/**
 * Format phone number by removing all spaces.
 *
 * @param phoneNumber The phone number to format.
 * @returns The formatted phone number without spaces.
 */
export const formatPhoneNumber = (phoneNumber: string) => {
  return phoneNumber.replace(/\s/g, "");
};
