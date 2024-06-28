import { FormControl } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  DesktopDatePicker,
  DesktopDatePickerProps,
} from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';

import ErrorMessage from '../ErrorMessage';
import { inputStyles } from './styles';

interface DatePickerFieldProps
  extends Omit<DesktopDatePickerProps<any>, 'name' | 'value' | 'onChange'> {
  control: Control<any>;
  name: string;
  placeholder: string;
  error?: FieldError;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({
  control,
  name,
  placeholder,
  error,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <FormControl
            component="label"
            error={!!error || !!fieldState.error}
            sx={{ position: 'relative', width: '100%' }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                {...field}
                value={field.value || null}
                onChange={date => field.onChange(date)}
                {...props}
                sx={inputStyles}
              />
            </LocalizationProvider>
            {error?.message && <ErrorMessage message={error.message} />}
            {fieldState.error?.message && (
              <ErrorMessage message={fieldState.error.message} />
            )}
          </FormControl>
        );
      }}
    />
  );
};

export default DatePickerField;
