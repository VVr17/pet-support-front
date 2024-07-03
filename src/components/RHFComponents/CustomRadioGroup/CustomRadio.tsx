import { FormControlLabel, Radio, Typography, useTheme } from '@mui/material';

type CustomRadioProps = SelectOption & {
  checked: boolean;
};

const CustomRadio = ({ label, value, checked }: CustomRadioProps) => {
  const theme = useTheme();
  return (
    <FormControlLabel
      sx={{
        border: '1px solid',
        backgroundColor: checked ? '#FFFDFB' : 'inherit',
        borderColor: checked ? theme.palette.primary.main : '#E5E5E5',
      }}
      value={value}
      control={<Radio sx={{ color: '#E4DED9' }} />}
      label={<Typography component="span">{label}</Typography>}
    />
  );
};

export default CustomRadio;
