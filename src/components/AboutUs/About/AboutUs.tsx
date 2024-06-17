import ImgUrl from "@/assets/home/about-us-pets.png";
import Section from "@/components/Section";
import useResponsive from "@/hooks/useResponsive";
import { Box, CardMedia, Grid, Typography } from "@mui/material";

const AboutUs = () => {
  const isDesktop = useResponsive("up", "lg");

  return (
    <Section>
      <Grid container spacing={{ md: 1, lg: 2 }}>
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
            <Typography variant="h2">Welcome to Cozy House!</Typography>
            <Typography>
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
          <Grid item md={6}>
            <CardMedia
              component="img"
              image={ImgUrl}
              alt="pets"
              sx={{ width: 300, height: 408 }}
            />
          </Grid>
        )}
      </Grid>
    </Section>
  );
};

export default AboutUs;
