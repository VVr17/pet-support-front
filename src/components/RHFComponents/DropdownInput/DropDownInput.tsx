import DoneIcon from '@mui/icons-material/Done';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FormControl, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
import { Controller } from 'react-hook-form';

import useResponsive from '@/hooks/useResponsive';

import ErrorMessage from '../ErrorMessage';
import { getSelectStyles, menuStyles } from './styles';
import { DropdownInputProps } from './types';

const DropdownInput = <T extends string | number>({
  name,
  control,
  options,
  placeholder,
  CustomIcon,
}: DropdownInputProps<T>) => {
  const isMobile = useResponsive('down', 'md');

  const getRenderValue = (selected: T) =>
    options.find(opt => opt.value === selected)?.label || placeholder;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const { value, ...other } = field;
        return (
          <FormControl fullWidth>
            <Select
              {...other}
              IconComponent={CustomIcon ? CustomIcon : ExpandMoreIcon}
              displayEmpty
              fullWidth
              renderValue={getRenderValue}
              sx={getSelectStyles(isMobile)}
              value={value || ''}
              MenuProps={menuStyles}
            >
              <MenuItem disableTouchRipple sx={{ display: 'none' }} value="" />
              {options.map(opt => {
                return (
                  <MenuItem
                    key={opt.value}
                    disableTouchRipple
                    value={opt.value}
                    sx={{
                      fontSize: `${isMobile ? '1rem' : '1.125rem'}`,
                      fontWeight: 500,
                    }}
                  >
                    {opt.label}
                    {value === opt.value ? (
                      <DoneIcon color="primary" sx={{ marginLeft: 5 }} />
                    ) : null}
                  </MenuItem>
                );
              })}
            </Select>
            {fieldState.error?.message && (
              <ErrorMessage message={fieldState.error.message} />
            )}
          </FormControl>
        );
      }}
    />
  );
};

export default DropdownInput;
