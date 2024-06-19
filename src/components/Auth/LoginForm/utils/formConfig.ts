import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, ValidationMode } from "react-hook-form";

import { loginSchema } from "@/utils/validation/loginSchema";

export const defaultValues = {
  email: "",
  password: "",
};

export const formConfig = {
  resolver: yupResolver(loginSchema) as Resolver<ILoginForm>,
  mode: "all" as keyof ValidationMode,
  defaultValues: defaultValues,
};
