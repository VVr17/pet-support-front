import dayjs from 'dayjs';

// Create a data row
const createData = (name: string, value: number | string) => ({
  name,
  value,
});

/**
 * Gets rows of data from a notice object
 * @param notice - The notice object containing details
 * @returns Array of data rows
 */
export const getRows = (notice: Notice) => {
  const formattedDate = dayjs(notice.dateOfBirth).format('DD MMM YYYY');

  // Define the fields to be included in the data rows
  const fields = [
    { key: 'Name', value: notice.name },
    { key: 'Birthday', value: formattedDate },
    { key: 'Breed', value: notice.breed },
    { key: 'Location', value: notice.location },
    { key: 'Sex', value: notice.sex },
    { key: 'Price', value: notice.price ? `UAH ${notice.price}` : '------' },
    { key: 'Email', value: notice.Owner.email },
    { key: 'Phone', value: notice.Owner.phone },
  ];

  return fields.map(field => createData(field.key, field.value));
};
