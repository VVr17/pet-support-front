import { FormControl, MenuItem, useTheme } from '@mui/material';
import Select from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DropdownInputProps } from './types';
import DoneIcon from '@mui/icons-material/Done';
import useResponsive from '@/hooks/useResponsive';
import { Controller } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';

const DropdownInput = <T extends string | number>({
  name,
  control,
  options,
  placeholder,
  CustomIcon,
}: DropdownInputProps<T>) => {
  const isMobile = useResponsive('down', 'md');
  const theme = useTheme();

  const menuStyles = {
    PaperProps: {
      sx: {
        border: `1px solid #EAEFFC`,
        borderRadius: '6px',
        boxShadow: 'none',
        maxHeight: 210,
        overflowY: 'scroll',
        transform: 'translateY(4px) !important',

        '& .MuiList-root': {
          padding: '0px',

          '& .MuiMenuItem-root': {
            justifyContent: 'space-between',
            padding: '10px 16px',
            ':hover': {
              backgroundColor: '#EAEFFC',
            },
            '&.Mui-selected': {
              backgroundColor: `${theme.palette.common.white}`,
              ':hover': {
                backgroundColor: '#EAEFFC',
              },
            },
          },
        },

        '&::-webkit-scrollbar': {
          width: '6px',
          backgroundColor: '#f5f5f5',
        },
        '&::-webkit-scrollbar-track': {
          background: '#fff',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'lightgray',
          borderRadius: '20px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: 'gray',
          cursor: 'pointer',
        },
      },
    },
  };

  const textStyles = {
    fontSize: `${isMobile ? '1rem' : '1.125rem'}`,
    fontWeight: 500,
    fontFamily: '"Mulish",sans-serif',
  };

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
              sx={textStyles}
              value={value || ''}
              MenuProps={menuStyles}
            >
              <MenuItem
                disableTouchRipple
                sx={{
                  display: 'none',
                }}
                value=""
              />
              {options.map(opt => {
                return (
                  <MenuItem
                    key={opt.value}
                    disableTouchRipple
                    value={opt.value}
                    sx={textStyles}
                  >
                    {opt.label}
                    {value === opt.value ? (
                      <DoneIcon
                        color="primary"
                        sx={{
                          marginLeft: 5,
                        }}
                      />
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
