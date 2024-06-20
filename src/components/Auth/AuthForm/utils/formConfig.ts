import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, ValidationMode } from "react-hook-form";

import { authSchema } from "@/utils/validation/authSchema";

export const defaultValues = {
  email: "",
  password: "",
};

export const formConfig = {
  resolver: yupResolver(authSchema) as Resolver<AuthForm>,
  mode: "all" as keyof ValidationMode,
  defaultValues: defaultValues,
};
