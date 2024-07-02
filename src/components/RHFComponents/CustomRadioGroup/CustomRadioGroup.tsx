/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, RadioGroup } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

import ErrorMessage from '../ErrorMessage';
import CustomRadio from './CustomRadio';
import { radioGroupStyles } from './styles';

type CustomRadioCroupProps = {
  options: SelectOption[];
  control: Control<any>;
  name: string;
};

const CustomRadioGroup = ({
  options,
  control,
  name,
}: CustomRadioCroupProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const { onChange, value, ...other } = field;

        return (
          <FormControl
            component="label"
            error={!!fieldState.error}
            sx={{ position: 'relative', width: '100%' }}
          >
            <RadioGroup
              {...other}
              value={value}
              onChange={(_, value) => onChange(value)}
              sx={radioGroupStyles}
            >
              {options.map(opt => (
                <CustomRadio
                  key={opt.value}
                  {...opt}
                  checked={value === opt.value}
                />
              ))}
            </RadioGroup>
            {fieldState.error?.message && (
              <ErrorMessage message={fieldState.error.message} />
            )}
          </FormControl>
        );
      }}
    />
  );
};

export default CustomRadioGroup;
