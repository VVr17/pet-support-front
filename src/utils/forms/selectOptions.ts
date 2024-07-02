/**
 * Transforms an array of category objects into an array of options for a select input.
 *
 * @param categories - An optional array of category objects.
 * @returns An array of options with `value` and `label` properties.
 */
export const getCategoriesOptions = (categories?: Category[]) => {
  return categories
    ? categories.map(category => ({
        value: category.id,
        label: category.titleEn,
      }))
    : [];
};

/**
 * Transforms an array of species objects into an array of options for a select input.
 *
 * @param species - An optional array of species objects.
 * @returns An array of options with `value` and `label` properties.
 */
export const getSpeciesOptions = (species?: Species[]) => {
  return species
    ? species.map(species => ({
        value: species.id,
        label: species.titleEn,
      }))
    : [];
};

export const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];
