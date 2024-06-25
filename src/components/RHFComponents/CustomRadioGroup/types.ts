import { Control } from "react-hook-form";

export type CustomRadioGroupOption = {
  value: number;
  label: string;
  description?: string;
};

export type CustomRadioProps = CustomRadioGroupOption & {
  checked: boolean;
};

export type CustomRadioCroupProps = {
  options: CustomRadioGroupOption[];
  control: Control<any>;
  name: string;
};
