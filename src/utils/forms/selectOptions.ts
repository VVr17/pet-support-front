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

export const sexOptions = [
  { value: 0, label: 'Male' },
  { value: 1, label: 'Female' },
];
