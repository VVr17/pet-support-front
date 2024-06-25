import * as yup from 'yup';

export const noticeSchema = yup.object().shape({
  // First step
  title: yup.string(),
  name: yup.string(),
  breed: yup.string(),
  dateOfBirth: yup.string(),

  // Second step
  sex: yup
    .number()
    .oneOf([0, 1], 'Should be email or phone')
    .required('Method is required'),
  price: yup.number().nullable(),
  categoryId: yup.string(),

  // Third step
  image: yup.mixed(),

  // Fourth step
  location: yup.string(),
  comments: yup.string(),
});
