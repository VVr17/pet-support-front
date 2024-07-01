/* eslint-disable @typescript-eslint/no-explicit-any */
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, FormControl } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import React from 'react';
import { Control, Controller } from 'react-hook-form';

import ErrorMessage from '../ErrorMessage';
import { iconWrapperStyles, inputPropsStyles, inputStyles } from './styles';

interface IProp {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
}

const PhoneInput: React.FC<IProp> = ({ control, name, label, placeholder }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const { onChange, value, ...otherFields } = field;

        return (
          <FormControl
            component="label"
            error={!!fieldState.error}
            sx={{ position: 'relative', width: '100%' }}
          >
            <MuiTelInput
              {...otherFields}
              value={value}
              label={label}
              onChange={value => {
                onChange(value);
              }}
              defaultCountry="UA"
              sx={inputStyles}
              placeholder={placeholder}
              inputProps={inputPropsStyles}
            />
            <Box
              position="absolute"
              sx={iconWrapperStyles}
              width={24}
              height={24}
            >
              <KeyboardArrowDownIcon />
            </Box>
            {fieldState.error?.message && (
              <ErrorMessage message={fieldState.error.message} />
            )}
          </FormControl>
        );
      }}
    />
  );
};

export default PhoneInput;
