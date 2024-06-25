import { Avatar, Box, Typography } from '@mui/material';
import { confirmationCardStyles } from './styles';

interface IProp {
  iconUrl: string;
  title: string;
  description: string;
}

const ConfirmationCard: React.FC<IProp> = ({ iconUrl, title, description }) => {
  return (
    <Box display="flex" gap={{ xs: 1, md: 4.5 }} sx={confirmationCardStyles}>
      <Avatar src={iconUrl} />
      <Box>
        <Typography
          variant="subtitle1"
          component="label"
          display="block"
          fontWeight={700}
          mb={1}
        >
          {title}
        </Typography>
        <Typography variant="body1" fontWeight={600} color="text.secondary">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ConfirmationCard;
