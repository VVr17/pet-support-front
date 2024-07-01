import dayjs from 'dayjs';

/**
 * Converts data from AboutForm to a Partial<User> object with formatted birthday.
 * @param data The data from AboutForm.
 * @returns Partial<User> object with formatted birthday.
 */
export const getFormattedDto = (data: AboutForm) => {
  const formattedData: Partial<User> = {
    ...data,
    birthday: data.birthday ? dayjs(data.birthday).toISOString() : null,
  };

  return formattedData;
};
