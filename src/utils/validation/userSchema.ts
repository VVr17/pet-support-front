import * as yup from 'yup';

import {
  emailRegEx,
  locationRegEx,
  onlyLettersRegEx,
  phoneRegEx,
} from './RegEx';

export const userAboutSchema = yup.object().shape({
  fullName: yup
    .string()
    .nullable()
    .transform((value, originalValue) => (originalValue === '' ? null : value))
    .test({
      name: 'valid-fullname',
      test: function (value) {
        if (value == null) {
          return true;
        }
        return onlyLettersRegEx.test(value);
      },
      message: 'Only letters can be accepted',
    })
    .min(3, 'Name should have at least 3 characters')
    .max(32, 'Name should be up to 32 characters long'),
  birthday: yup.date().nullable(),
});

export const userContactSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegEx, 'Should be valid email')
    .required('Email is required'),
  phone: yup
    .string()
    .nullable()
    .transform((_value, originalValue) =>
      originalValue === null || originalValue === undefined
        ? null
        : originalValue.replace(/\s/g, ''),
    )
    .test('is-valid-phone', 'Should be a valid phone number', function (value) {
      const { isPhoneRequired } = this.parent as any;
      if (isPhoneRequired) {
        return value !== null && value !== undefined
          ? phoneRegEx.test(value)
          : false;
      }
      return true;
    }),
  location: yup
    .string()
    .nullable()
    .transform((value, originalValue) => (originalValue === '' ? null : value))
    .when('$isLocationRequired', (isLocationRequired, schema) =>
      isLocationRequired
        ? schema.matches(
            locationRegEx,
            'Should be "City, Region" separated by comma, only letters can be accepted',
          )
        : schema,
    )
    .min(3, 'City should have at least 3 characters'),
});
