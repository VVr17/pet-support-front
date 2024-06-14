import { Container, Button, Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Typography variant="h1" color="text.accent">
        Home
      </Typography>

      <Grid container gap={2} mb={2}>
        <Grid item>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
