/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { FormControl, TextField, Slider, Typography, Box } from '@mui/material';

import ErrorMessage from '../ErrorMessage';
import useResponsive from '@/hooks/useResponsive';
import { inputStyles } from './styles';

interface IProp {
  control: Control<any>;
  name: string;
  placeholder: string;
  minRange: number;
  maxRange: number;
  label?: string;
}

const RangeField: React.FC<IProp> = ({
  control,
  name,
  placeholder,
  minRange,
  maxRange,
  label,
}) => {
  const isMobile = useResponsive('down', 'md');

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl
          component="label"
          error={!!fieldState.error}
          sx={{ position: 'relative', width: '100%' }}
        >
          <TextField
            {...field}
            type="number"
            placeholder={placeholder}
            variant="outlined"
            inputProps={{
              style: {
                fontSize: `${isMobile ? '1rem' : '1.125rem'}`,
                fontWeight: 500,
              },
            }}
            sx={inputStyles}
          />

          <Slider
            {...field}
            valueLabelDisplay="auto"
            min={minRange}
            max={maxRange}
            sx={{ padding: '14px 0 !important' }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body1" color="text.secondary">
              {minRange} {label}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {maxRange}
            </Typography>
          </Box>

          {fieldState.error?.message && (
            <ErrorMessage message={fieldState.error.message} />
          )}
        </FormControl>
      )}
    />
  );
};

export default RangeField;
