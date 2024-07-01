/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { Control } from 'react-hook-form';

export type DropdownOption<T> = {
  value: T;
  label: string | number;
};

export type DropdownInputProps<T extends string | number> = {
  control: Control<any>;
  name: string;
  options: DropdownOption<T>[];
  placeholder: string;
  CustomIcon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
};
