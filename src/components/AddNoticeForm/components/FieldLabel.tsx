import { Typography, TypographyProps } from '@mui/material';

interface IProps extends TypographyProps {
  label: string;
}

const FieldLabel: React.FC<IProps> = ({ label, ...props }) => {
  return (
    <Typography
      variant="subtitle1"
      component="label"
      display="block"
      fontWeight={700}
      {...props}
    >
      {label}
    </Typography>
  );
};

export default FieldLabel;
