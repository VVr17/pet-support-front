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
