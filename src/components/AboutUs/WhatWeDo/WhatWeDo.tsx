import { Grid, Typography } from '@mui/material';

import Section from '@/components/Section';
import { whatWeDoData } from '@/utils/staticData/whatWeDo';

import ActionCard from './ActionCard';

const WhatWeDo = () => {
  return (
    <Section>
      <Typography
        variant="h2"
        mb={{ xs: 3, md: 4 }}
        mx="auto"
        textAlign={{ xs: 'center', md: 'start' }}
      >
        What We Do
      </Typography>

      <Grid container spacing={{ xs: 3, lg: 7.5 }}>
        {whatWeDoData.map(({ title, description, iconUrl }, index) => (
          <Grid item xs={12} md={4} key={index}>
            <ActionCard
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

export default WhatWeDo;
