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
    sex,
    category,
    price,
    comments,
  } = notice;

  const noticeFormData = {
    title,
    name,
    breed,
    dateOfBirth: dayjs(dateOfBirth),
    location,
    sex: (sex === 'male' ? 0 : 1) as Sex,
    categoryId: category.id,
    price: price ? price : 0,
    image: '',
    comments,
  };

  return noticeFormData;
};
