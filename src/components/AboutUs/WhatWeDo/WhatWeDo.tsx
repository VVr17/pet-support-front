import { Grid, Typography } from "@mui/material";

import Section from "@/components/Section";

const WhatWeDo = () => {
  return (
    <Section>
      <Typography variant="h2" mb={4} textAlign="center">
        What We Do
      </Typography>

      <Grid container spacing={{ xs: 2, md: 4 }}>
        <Grid item xs={12} sm={6} lg={3}>
          <Typography component="p" fontWeight={600} mb={2}>
            Find Your Lost Pet:
          </Typography>
          <Typography component="p">
            Losing a pet is a distressing experience. At Cozy House, we provide
            a comprehensive platform where you can post notices about your lost
            pet and browse listings of found pets in your area. Our
            community-driven approach increases the chances of a joyful reunion.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <Typography component="p" fontWeight={600} mb={2}>
            Adopt a New Friend:
          </Typography>
          <Typography component="p">
            Looking to add a new member to your family? Cozy House offers a wide
            range of adoption listings, from pets needing new homes to animals
            rescued and cared for by loving individuals. Browse our categories,
            such as "sell" and "in-good-hands," to find the perfect companion
            for your lifestyle.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <Typography component="p" fontWeight={600} mb={2}>
            Stay Informed:
          </Typography>
          <Typography component="p">
            Keep up with the latest pet-related news and stories through our
            dedicated news section. Learn about pet care tips, heartwarming
            rescue stories, and updates on animal welfare.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <Typography component="p" fontWeight={600} mb={2}>
            Create Notices:
          </Typography>
          <Typography component="p">
            Whether you're looking to find a new home for a pet, reunite a lost
            pet with its owner, or share important news, Cozy House allows you
            to create detailed notices that reach a wide audience. Choose from
            categories like "sell," "in-good-hands," and "lost/found" to ensure
            your message gets to the right people.
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
};

export default WhatWeDo;
