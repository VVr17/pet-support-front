import * as yup from 'yup';
import { emailRegEx } from './RegEx';

export const userAboutSchema = yup.object().shape({
  fullName: yup.string(),
  birthday: yup.string(),
});

export const userContactSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegEx, 'Should be valid email')
    .required('Email is required'),
  phone: yup.string(),
  location: yup.string(),
});
