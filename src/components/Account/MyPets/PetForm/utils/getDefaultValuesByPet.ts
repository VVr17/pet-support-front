import dayjs from 'dayjs';

/**
 * Get transformed pet data for update pet form
 *
 * @param pet pet details
 * @returns default values for update pet form in necessary format
 */
export const getDefaultValuesByPet = (pet: Pet) => {
  const { title, name, breed, dateOfBirth, comments } = pet;

  const petFormData = {
    title,
    name,
    breed,
    dateOfBirth: dayjs(dateOfBirth),
    image: '',
    comments,
  };

  return petFormData;
};
