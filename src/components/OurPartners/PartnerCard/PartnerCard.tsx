import {
  Avatar,
  Box,
  Card,
  CardContent,
  Link,
  Typography,
} from '@mui/material';

import { getContacts } from './getContacts';
import { cardStyles } from './styles';

interface IPartnerCardProps {
  partner: Partner;
}
const PartnerCard: React.FC<IPartnerCardProps> = ({ partner }) => {
  const { name_en, iconUrl, address } = partner;

  return (
    <Card variant="outlined" sx={cardStyles}>
      <Box display="flex" mb={{ xs: 1, md: 2 }} gap={1} alignItems="center">
        <Avatar src={iconUrl} />
        <Typography variant="h5" component="p">
          {name_en}
        </Typography>
      </Box>

      <CardContent sx={{ padding: '0 !important' }}>
        <Box>
          <Typography variant="body1" color="text.secondary" mb={2}>
            {address.en}
          </Typography>
        </Box>
        <Box>
          {getContacts(partner).map(({ href, label, value }, index) => (
            <Typography key={href} variant="body1" color="text.secondary">
              <Typography component="span" fontWeight={600}>
                {label}
              </Typography>{' '}
              <Link
                href={href}
                {...(index === 0 && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                underline="hover"
                color="secondary"
              >
                {value}
              </Link>
            </Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PartnerCard;
