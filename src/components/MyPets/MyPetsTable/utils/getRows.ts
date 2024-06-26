function createData(
  id: string,
  name: string,
  breed: string,
  dateOfBirth: string,
  comments: string,
): MyPetData {
  return {
    id,
    name,
    breed,
    dateOfBirth,
    comments,
  };
}

/**
 * Gets rows of data from a pets array
 * @param pets - The pets array containing details
 * @returns Array of data rows
 */
export const getRows = (pets: Pet[]) => {
  return pets?.map(pet =>
    createData(pet.id, pet.name, pet.breed, pet.dateOfBirth, pet.comments),
  );
};
