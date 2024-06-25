function createData(
  id: string,
  title: string,
  category: string,
  name: string,
  breed: string,
  dateOfBirth: string,
  location: string,
  price: number,
): MyNoticeData {
  return {
    id,
    title,
    category,
    name,
    breed,
    dateOfBirth,
    location,
    price,
  };
}

/**
 * Gets rows of data from a notices array
 * @param notices - The notices array containing details
 * @returns Array of data rows
 */
export const getRows = (notices?: Notice[]) => {
  return notices?.map(notice =>
    createData(
      notice.id,
      notice.title,
      notice.category.titleEn,
      notice.name,
      notice.breed,
      notice.dateOfBirth,
      notice.location,
      notice.price,
    ),
  );
};
