import { Box, CardMedia, Grid, Typography } from "@mui/material";

import ImgUrl from "@/assets/home/about-us-pets.png";
import Section from "@/components/Section";
import useResponsive from "@/hooks/useResponsive";

const AboutUs = () => {
  const isDesktop = useResponsive("up", "lg");

  return (
    <Section bgcolor="background.secondary">
      <Grid container spacing={{ xs: 5, md: 1, lg: 2 }}>
        {isDesktop && (
          <Grid item md={6}>
            <CardMedia
              component="img"
              image={ImgUrl}
              alt="pets"
              sx={{ width: 300, height: 408 }}
            />
          </Grid>
        )}

        <Grid item md={6}>
          <Box
            display="flex"
            height="100%"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography
              variant="h2"
              mb={4}
              textAlign={{ xs: "center", md: "start" }}
            >
              Welcome to Cozy House!
            </Typography>
            <Typography mb={4}>
              At Cozy House, we believe that every pet deserves a loving home
              and that no family should ever have to endure the heartache of
              losing a beloved animal companion. Our mission is to connect pet
              lovers, owners, and rescuers in a supportive community where
              finding a lost pet or adopting a new furry friend is made easier,
              safer, and more efficient.
            </Typography>
            <Typography>
              Our vision is a world where every pet has a home and every pet
              owner has the resources and support they need to care for their
              furry family members. By harnessing the power of technology and
              community, we aim to reduce the number of stray and homeless
              animals and enhance the overall well-being of pets and their
              owners.
            </Typography>
          </Box>
        </Grid>

        {!isDesktop && (
          <Grid item md={6} width="100%">
            <CardMedia
              component="img"
              image={ImgUrl}
              alt="pets"
              sx={{ width: 300, height: 408, mx: "auto" }}
            />
          </Grid>
        )}
      </Grid>
    </Section>
  );
};

export default AboutUs;
