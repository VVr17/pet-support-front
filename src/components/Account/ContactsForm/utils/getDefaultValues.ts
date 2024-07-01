/**
 * Retrieves default values for user fields.
 * @param user The user data object.
 * @returns Default values object.
 */
export const getDefaultValues = (user: Partial<User>) => {
  return {
    email: user.email,
    phone: user.phone || '',
    location: user.location || '',
  };
};
