/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, FormControl, Slider, TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

import useResponsive from '@/hooks/useResponsive';

import ErrorMessage from '../ErrorMessage';
import { inputStyles } from './styles';

interface IProp {
  methods: UseFormReturn<any, any, undefined>;
  name: string;
  minRange: number;
  maxRange: number;
  caption?: string;
  label?: string;
}

const DoubleRangeField: React.FC<IProp> = ({
  methods,
  name,
  minRange,
  maxRange,
  caption,
  label,
}) => {
  const { control } = methods;
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
          {label && (
            <Typography variant="subtitle1" fontWeight={600} mb={1}>
              {label}
            </Typography>
          )}

          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
              type="number"
              variant="outlined"
              value={field.value[0]}
              onChange={e => {
                const newValue = e.target.value === '' ? '' : +e.target.value;
                field.onChange([newValue, field.value[1]]);
              }}
              onBlur={e => {
                if (!e.target.value) {
                  const newValue = [...field.value];
                  newValue[0] = 0;
                  field.onChange(newValue);
                  return;
                }

                const data = e.target.value.match(/\d+/);
                if (data && +data > field.value[1]) {
                  field.onChange([field.value[1] - 1, field.value[1]]);
                  return;
                }
              }}
              inputProps={{
                style: {
                  fontSize: `${isMobile ? '1rem' : '1.125rem'}`,
                  fontWeight: 500,
                },
              }}
              sx={inputStyles}
            />
            <TextField
              type="number"
              variant="outlined"
              value={field.value[1]}
              onChange={e => {
                const newValue = e.target.value === '' ? '' : +e.target.value;
                field.onChange([field.value[0], newValue]);
              }}
              onBlur={e => {
                if (!e.target.value) {
                  field.onChange([field.value[0], field.value[0] + 1]);
                  return;
                }

                const data = e.target.value.match(/\d+/);

                if (data && +data < field.value[0]) {
                  field.onChange([field.value[0], field.value[0] + 1]);
                  return;
                }

                if (data && +data > maxRange) {
                  field.onChange([field.value[0], maxRange]);
                }
              }}
              inputProps={{
                style: {
                  fontSize: `${isMobile ? '1rem' : '1.125rem'}`,
                  fontWeight: 500,
                },
              }}
              sx={inputStyles}
            />
          </Box>

          <Box width="90%" mx="auto">
            <Slider
              {...field}
              valueLabelDisplay="auto"
              value={[
                field.value[0] ? field.value[0] : 0,
                field.value[1] ? field.value[1] : 0,
              ]}
              min={minRange}
              max={maxRange}
              sx={{ padding: '14px 0 !important' }}
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Typography variant="body1" color="text.secondary">
              {minRange} {caption}
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

export default DoubleRangeField;
