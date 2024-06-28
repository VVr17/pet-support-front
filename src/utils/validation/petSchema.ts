import * as yup from 'yup';

import { onlyLettersRegEx } from './RegEx';

export const petSchema = yup.object().shape({
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
  comments: yup
    .string()
    .min(8, 'Comments should be at least 8 characters long')
    .max(200, 'Comments should be up to 200 characters long')
    .required('Comments are required'),
});
