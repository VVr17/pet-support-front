import {
  Box,
  CardMedia,
  Container,
  Grid,
  Link,
  List,
  ListItem,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import ImgUrl from '@/assets/images/footer/footer-puppy.png';
import Logo from '@/components/ui-kit/Logo';
import { contacts } from '@/utils/constants/contacts';
import { mainNavigation } from '@/utils/constants/routes';

import { footerLinkStyles, footerStyles, imgStyles } from './styles';

const Footer = () => {
  return (
    <Box component="footer" pt={5} sx={footerStyles}>
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 3, md: 2, lg: 3 }}>
          <Grid item xs={12} sm={6} md={5}>
            <Box
              mb={{ xs: 1.5, lg: 3.75 }}
              px={2}
              py={1.5}
              textAlign={{ xs: 'center', md: 'start' }}
            >
              <Logo type="light" />
            </Box>
            <List>
              {contacts.map(({ href, label, Icon }) => (
                <ListItem key={href}>
                  <Link
                    href={href}
                    color="primary"
                    underline="hover"
                    variant="h5"
                    sx={footerLinkStyles}
                  >
                    <Icon sx={{ mr: 1 }} />
                    {label}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <List>
              {mainNavigation.map(({ href, label }) => (
                <ListItem key={href}>
                  <Link
                    component={RouterLink}
                    to={href}
                    color="primary"
                    underline="hover"
                    variant="h5"
                    sx={footerLinkStyles}
                  >
                    {label}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              image={ImgUrl}
              alt="puppy"
              sx={imgStyles}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
