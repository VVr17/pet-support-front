import * as yup from "yup";

import { emailRegEx, passwordRegEx } from "./RegEx";

export const authSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegEx, "Should be valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(7)
    .max(32)
    .matches(passwordRegEx, "Please enter a valid password")
    .required(),
});
