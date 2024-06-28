import { Grid, Typography } from '@mui/material';

import { shelters } from '@/utils/staticData/partners';

import Section from '../Section';
import PartnerCard from './PartnerCard';

const OurPartners = () => {
  return (
    <Section bgcolor="background.secondary">
      <Typography variant="h2" textAlign="center" mb={5}>
        Our Partners
      </Typography>
      <Grid container spacing={3}>
        {shelters.map((shelter, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PartnerCard partner={shelter} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default OurPartners;
