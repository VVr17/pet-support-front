import { Box, CardMedia, Grid, Typography } from '@mui/material';

import ImgUrl from '@/assets/images/about/about-us-pets.png';
import Section from '@/components/Section';
import useResponsive from '@/hooks/useResponsive';

import { imgStyles } from './styles';

const AboutUs = () => {
  const isDesktop = useResponsive('up', 'md');

  return (
    <Section bgcolor="background.secondary">
      <Grid container spacing={{ xs: 5, md: 1, lg: 2 }}>
        {isDesktop && (
          <Grid item md={6}>
            <CardMedia
              component="img"
              image={ImgUrl}
              alt="pets"
              sx={imgStyles}
            />
          </Grid>
        )}

        <Grid item md={6} width="100%">
          <Box
            display="flex"
            height="100%"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h2"
              mb={4}
              textAlign={{ xs: 'center', md: 'start' }}
            >
              Welcome to Cozy House!
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              color="text.secondary"
              maxWidth={700}
              textAlign={{ xs: 'center', md: 'start' }}
            >
              At Cozy House, we believe that every pet deserves a loving home
              and that no family should ever have to endure the heartache of
              losing a beloved animal companion. Our mission is to connect pet
              lovers, owners, and rescuers in a supportive community where
              finding a lost pet or adopting a new furry friend is made easier,
              safer, and more efficient.
            </Typography>
          </Box>
        </Grid>

        {!isDesktop && (
          <Grid item md={6} width="100%">
            <CardMedia
              component="img"
              image={ImgUrl}
              alt="pets"
              sx={imgStyles}
            />
          </Grid>
        )}
      </Grid>
    </Section>
  );
};

export default AboutUs;
