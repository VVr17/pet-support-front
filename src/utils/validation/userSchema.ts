import * as yup from "yup";

export const userAboutSchema = yup.object().shape({
  name: yup.string(),
  birthday: yup.string(),
});

export const userContactSchema = yup.object().shape({
  email: yup.string(),
  phone: yup.string(),
  city: yup.string(),
});
