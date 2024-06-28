import * as yup from 'yup';

import { emailRegEx, locationRegEx } from './RegEx';

export const userAboutSchema = yup.object().shape({
  fullName: yup
    .string()
    .min(3, 'Name should have at least 3 characters')
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/,
      'Only letters can be accepted',
    )
    .max(32, 'Name should be up to 32 characters long'),
  birthday: yup.date(),
});

export const userContactSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegEx, 'Should be valid email')
    .required('Email is required'),
  phone: yup.string(),
  location: yup
    .string()
    .matches(
      locationRegEx,
      'Should be "City, Region" separated by comma, only letters can be accepted',
    )
    .min(3, 'City should have at least 3 characters'),
});
