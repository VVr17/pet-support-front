// Define fields to validate for each step
export const stepFields: Array<keyof NoticeForm>[] = [
  ['title', 'name', 'breed', 'dateOfBirth', 'location'],
  ['gender', 'categoryId', 'price'],
  ['image'],
  ['comments'],
];
