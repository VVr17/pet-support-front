import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import ImgUrl from "@/assets/images/home/hero-puppy.png";
import { ROUTES } from "@/utils/constants/routes";

import { buttonStyles, imgStyles, sectionStyles } from "./styles";

const Hero = () => {
  return (
    <Box component="section" pt={{ xs: 12, md: 16, lg: 20 }} sx={sectionStyles}>
      <Container>
        <Grid container spacing={{ xs: 10, md: 12.5, lg: 5 }}>
          <Grid item xs={12} lg={6} width="100%">
            <Box
              display="flex"
              height="100%"
              flexDirection="column"
              maxWidth={{ xs: "100%", sm: 460 }}
              textAlign={{ xs: "center", sm: "start" }}
              mx="auto"
            >
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
                size="large"
                sx={buttonStyles}
              >
                Find a friend
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} width="100%">
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

export default Hero;
