import { formatPhoneNumber } from '@/helpers/formatPhoneNumber';

/**
 * Converts data from AboutForm to a Partial<User> object with formatted birthday.
 * @param data The data from AboutForm.
 * @returns Partial<User> object with formatted birthday.
 */
export const getFormattedDto = (data: ContactsForm) => {
  const formattedData: Partial<User> = {
    ...data,
    phone: data.phone ? formatPhoneNumber(data.phone) : null,
  };

  return formattedData;
};
