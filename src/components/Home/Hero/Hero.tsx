import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import ImgUrl from "@/assets/home/hero-puppy.png";
import { ROUTES } from "@/utils/constants/routes";

const Hero = () => {
  return (
    <Box
      component="section"
      pt={{ xs: 12, md: 16, lg: 20 }}
      sx={{
        background:
          "radial-gradient(circle at top left, #513D2F 0%, #1A1A1C 100%)",
      }}
    >
      <Container>
        <Grid container spacing={{ xs: 12, md: 4, lg: 5 }}>
          <Grid item md={12} lg={6}>
            <Box display="flex" height="100%" flexDirection="column">
              <Typography variant="h1" color="white" mb={2}>
                Not only people need a home
              </Typography>
              <Typography variant="subtitle1" color="text.light" mb={6}>
                Our vision is a world where every pet has a home and every pet
                owner has the resources and support they need to care for their
                furry family members. By harnessing the power of technology and
                community, we aim to reduce the number of stray and homeless
                animals and enhance the overall well-being of pets and their
                owners.
              </Typography>
              <Button
                component={Link}
                to={ROUTES.pets}
                variant="contained"
                sx={{
                  maxWidth: "208px",
                  mx: { xs: "auto", lg: 0 },
                  textTransform: "none",
                }}
              >
                Find a friend
              </Button>
            </Box>
          </Grid>
          <Grid item md={6}>
            <CardMedia
              component="img"
              image={ImgUrl}
              alt="puppy"
              sx={{
                width: { xs: "100%", md: 569, xl: 650 },
                height: { xs: "auto", md: 593, xl: 680 },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
