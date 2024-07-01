import dayjs from 'dayjs';

/**
 * Retrieves default values for user fields, ensuring birthday is formatted using dayjs if available.
 * @param user The user data object.
 * @returns Default values object with formatted birthday.
 */
export const getDefaultValues = (user: Partial<User>) => {
  return {
    fullName: user.fullName || '',
    birthday: user.birthday ? dayjs(user.birthday) : null,
  };
};
