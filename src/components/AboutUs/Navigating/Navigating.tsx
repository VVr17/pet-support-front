import { Grid, Typography } from '@mui/material';

import { about } from '@/utils/staticData/aboutUsData';

import AboutCard from './AboutCard';
import Section from '@/components/Section';

const Navigating = () => {
  return (
    <Section pt={{ xs: 5, md: 6, lg: 12.5 }} pb={{ xs: 5, md: 6, lg: 12.5 }}>
      <Typography
        variant="h2"
        mb={{ xs: 3, md: 4, lg: 7.5 }}
        maxWidth={{ xs: 'auto', lg: 616 }}
      >
        Navigating innovation, empowering journeys
      </Typography>
      <Typography
        variant="subtitle1"
        component="p"
        color="text.secondary"
        mb={{ xs: 5 }}
        display={{ xs: 'block', lg: 'none' }}
      >
        In today's interconnected world, API integrations are the backbone of
        efficiency. Our API solutions empower businesses to exchange data
        seamlessly, streamline operations, and unlock new possibilities.
      </Typography>

      <Grid container spacing={{ xs: 3, lg: 7.5 }}>
        {about.map(({ title, description, iconUrl }, index) => (
          <Grid item xs={12} md={4} key={index}>
            <AboutCard
              title={title}
              description={description}
              iconUrl={iconUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default Navigating;
