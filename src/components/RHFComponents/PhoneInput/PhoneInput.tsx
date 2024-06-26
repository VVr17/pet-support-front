/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box, FormControl } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import { MuiTelInput } from 'mui-tel-input';

import ErrorMessage from '../ErrorMessage';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { inputStyles } from './styles';

interface IProp {
  control: Control<any>;
  name: string;
  placeholder: string;
}

const PhoneInput: React.FC<IProp> = ({ control, name, placeholder }) => {
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
              onChange={value => {
                onChange(value);
              }}
              defaultCountry="US"
              sx={inputStyles}
              placeholder={placeholder}
              inputProps={{
                style: {
                  padding: '12px',
                  fontSize: '1.125rem',
                  fontWeight: 500,
                },
              }}
            />
            <Box
              position="absolute"
              sx={{
                top: '50%',
                left: '32px',
                transform: 'translateY(-50%)',
                zIndex: 1,
                pointerEvents: 'none',
              }}
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
