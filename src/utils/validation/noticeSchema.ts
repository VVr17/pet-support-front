import * as yup from 'yup';

import { locationRegEx, onlyLettersRegEx } from './RegEx';

const baseSchema = {
  // First step
  title: yup
    .string()
    .min(2, 'Title should be at least 2 characters long')
    .max(48, 'Title should be up to 48 characters long')
    .required('Title is required'),

  name: yup
    .string()
    .matches(onlyLettersRegEx, 'Only letters can be accepted')
    .min(2, 'Name should be at least 2 characters long')
    .max(16, 'Name should be up to 16 characters long')
    .required('Pet name is required'),

  breed: yup
    .string()
    .matches(onlyLettersRegEx, 'Only letters can be accepted')
    .min(2, 'Breed should be at least 2 characters long')
    .max(24, 'Breed should be up to 24 characters long')
    .required('Pet breed is required'),

  dateOfBirth: yup.date().required('Date of birth is required'),

  location: yup
    .string()
    .matches(
      locationRegEx,
      'Should be "City, Region" separated by comma, only letters can be accepted',
    )
    .required('Location is required'),

  // Second step
  gender: yup.string().required('Gender is required'),
  price: yup.number().nullable(),

  categoryId: yup.string().required('Category is required'),
  speciesId: yup.string().required('Species is required'),

  // Fourth step
  comments: yup
    .string()
    .min(8, 'Comments should be at least 8 characters long')
    .max(200, 'Comments should be up to 200 characters long')
    .required('Comments are required'),
};

export const createNoticeSchema = yup.object().shape({
  ...baseSchema,
  // Third step
  image: yup
    .mixed()
    .test('fileFormat', 'Unsupported file format. Add image file', value => {
      if (!value) {
        return false;
      }

      const formValue = value as { type: string };
      const supportedFormats = ['image/jpeg', 'image/jpg', 'image/png'];
      return supportedFormats.includes(formValue.type);
    })
    .required('Pet image is required'),
});

export const updateNoticeSchema = yup.object().shape({
  ...baseSchema,
  // Third step
  image: yup
    .mixed()
    .test('fileFormat', 'Unsupported file format. Add image file', value => {
      if (!value) {
        return true; // not required field
      }

      const formValue = value as { type: string };
      const supportedFormats = ['image/jpeg', 'image/jpg', 'image/png'];
      return supportedFormats.includes(formValue.type);
    }),
});
