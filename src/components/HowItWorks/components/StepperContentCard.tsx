import {
  Box,
  Button,
  CardMedia,
  List,
  ListItem,
  Typography,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';

import useResponsive from '@/hooks/useResponsive';
import { useUserStore } from '@/store/useUserStore';
import { ROUTES } from '@/utils/constants/routes';

import { detailsStyles, getListItemStyles } from '../styles';

interface IProps {
  data: HowItWorksCard;
}
const StepperContentCard: React.FC<IProps> = ({ data }) => {
  const { user } = useUserStore();

  const { imageUrl, title, details, description, button } = data;
  const isMobile = useResponsive('down', 'md');
  const theme = useTheme();

  return (
    <Box textAlign={{ xs: 'center', md: 'start' }} maxWidth={530}>
      <Typography
        variant="h6"
        color="text.primary"
        fontSize={'1.5rem !important'}
        mb={{ xs: 3, lg: 4 }}
      >
        {title}
      </Typography>
      <List disablePadding sx={detailsStyles}>
        {details.map((value, index) => (
          <ListItem key={index} disablePadding sx={getListItemStyles(theme)}>
            <Typography
              variant="subtitle1"
              fontWeight={500}
              fontSize={{ xs: '1rem', lg: '1.25rem' }}
              textAlign={{ xs: 'center', md: 'start' }}
            >
              {value}
            </Typography>
          </ListItem>
        ))}
      </List>

      {/* If there is a path - router link to go to the specified route, otherwise - button  */}
      {button && (
        <Button
          component={Link}
          to={button.path}
          variant="contained"
          color="primary"
          sx={{
            width: 222,
            mb: { xs: 2, md: 3 },
          }}
          disabled={button.path === ROUTES.noticeForm && !user}
        >
          {button.title}
        </Button>
      )}

      <Typography
        variant="body1"
        color="text.secondary"
        fontSize={{ sm: 16 }}
        mb={{ xs: 3, md: 0 }}
        maxWidth={{ md: 390 }}
      >
        {description}
      </Typography>

      {isMobile && (
        <CardMedia
          component="img"
          src={imageUrl}
          alt={title}
          sx={{ maxWidth: '90%', mx: 'auto' }}
        />
      )}
    </Box>
  );
};

export default StepperContentCard;
