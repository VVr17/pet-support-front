import dayjs from 'dayjs';

/**
 * Get transformed notice data for update notice form
 *
 * @param notice Notice details
 * @returns default values for update notice form in necessary format
 */
export const getDefaultValuesByNotice = (notice: Notice) => {
  const {
    title,
    name,
    breed,
    location,
    dateOfBirth,
    gender,
    category,
    species,
    price,
    comments,
  } = notice;

  const noticeFormData = {
    title,
    name,
    breed,
    dateOfBirth: dayjs(dateOfBirth),
    location,
    gender: gender as GenderType,
    categoryId: category.id,
    speciesId: species.id,
    price: price ? price : 0,
    image: '',
    comments,
  };

  return noticeFormData;
};
