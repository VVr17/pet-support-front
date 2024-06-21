import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, ValidationMode } from "react-hook-form";

import { userAboutSchema } from "@/utils/validation/userSchema";

export const defaultValues = {
  name: "",
  birthday: "",
};

export const formConfig = {
  resolver: yupResolver(userAboutSchema) as Resolver<AboutForm>,
  mode: "all" as keyof ValidationMode,
  defaultValues: defaultValues,
};
