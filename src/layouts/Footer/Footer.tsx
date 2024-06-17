import { Container, Box, Typography, CardMedia, Grid } from "@mui/material";
import ImgUrl from "@/assets/footer/footer-puppy.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      pt={5}
      sx={{
        background:
          "radial-gradient(circle at top left, #513D2F 0%, #1A1A1C 100%)",
      }}
    >
      <Container>
        <Grid container spacing={{ md: 1, lg: 2 }}>
          <Grid item md={6}>
            <Typography variant="h2" color="white">
              Contacts
            </Typography>
          </Grid>
          <Grid item md={6}>
            <CardMedia
              component="img"
              image={ImgUrl}
              alt="puppy"
              sx={{ width: 300, height: 310 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
