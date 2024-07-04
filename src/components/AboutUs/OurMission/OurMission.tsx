import { Box, CardMedia, Grid, Typography } from '@mui/material';

import mission_imgUrl from '@/assets/images/about/mission-dog.png';
import Section from '@/components/Section';

const OurMission = () => {
  return (
    <Section>
      <Grid
        container
        columnSpacing={{ xs: 3, lg: 7.5 }}
        rowSpacing={{ xs: 4, lg: 0 }}
      >
        <Grid item xs={12} md={8} width="100%">
          <Box
            display="flex"
            height="100%"
            flexDirection="column"
            justifyContent="center"
            alignItems={{ xs: 'center', md: 'start' }}
          >
            <Typography
              variant="h2"
              mb={{ xs: 3, lg: 2 }}
              maxWidth={700}
              textAlign={{ xs: 'center', md: 'start' }}
            >
              Our mission
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              color="text.secondary"
              maxWidth={700}
              textAlign={{ xs: 'center', md: 'start' }}
            >
              Our vision is a world where every pet has a home and every pet
              owner has the resources and support they need to care for their
              furry family members. By harnessing the power of technology and
              community, we aim to reduce the number of stray and homeless
              animals and enhance the overall well-being of pets and their
              owners.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4} display={{ xs: 'none', md: 'initial' }}>
          <Box
            display="flex"
            height="100%"
            flexDirection="column"
            justifyContent="center"
          >
            <CardMedia
              component="img"
              image={mission_imgUrl}
              loading="lazy"
              alt="building"
              sx={{
                maxWidth: 516,
                height: 'auto',
                margin: '0 auto',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
};

export default OurMission;
