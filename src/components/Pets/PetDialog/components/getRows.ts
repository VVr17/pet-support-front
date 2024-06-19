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
  // Define the fields to be included in the data rows
  const fields = [
    { key: "Name", value: notice.name },
    { key: "Birthday", value: notice.birthDate },
    { key: "Breed", value: notice.breed },
    { key: "Location", value: notice.location },
    { key: "Sex", value: notice.sex },
    { key: "Price", value: notice.price ? `$${notice.price}` : "------" },
    { key: "Email", value: notice.Owner.email },
    { key: "Phone", value: notice.Owner.phone },
  ];

  return fields.map((field) => createData(field.key, field.value));
};
