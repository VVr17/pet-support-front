import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, ValidationMode } from "react-hook-form";

import { userContactSchema } from "@/utils/validation/userSchema";

export const defaultValues = {
  email: "",
  phone: "",
  location: "",
};

export const formConfig = {
  resolver: yupResolver(userContactSchema) as Resolver<ContactsForm>,
  mode: "all" as keyof ValidationMode,
  defaultValues: defaultValues,
};
