import { Box, Typography } from '@mui/material';
import { labelStyles } from './styles';

interface IProps {
  title: string;
  subtitle: string;
  withHeader?: boolean;
}
const FormTitle: React.FC<IProps> = ({
  title,
  subtitle,
  withHeader = false,
}) => {
  return (
    <Box
      textAlign="center"
      pb={{
        xs: withHeader ? 4 : 5,
        md: withHeader ? 6 : 2.75,
        lg: withHeader ? 7.5 : 2.75,
      }}
    >
      {withHeader && (
        <>
          <Typography
            variant="h4"
            gap={1}
            sx={labelStyles}
            mb={{ xs: 2, md: 3 }}
          >
            Let's create a new Notice
          </Typography>
        </>
      )}

      <Typography variant="h2" mb={{ xs: 2, md: 1 }}>
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        fontWeight={{ xs: 500, md: 600 }}
        maxWidth={withHeader ? 'auto' : 474}
        mx="auto"
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default FormTitle;
