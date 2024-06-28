import { Grid } from '@mui/material';

import AboutCard from '@/components/Account/AboutCard';
import ContactsForm from '@/components/Account/ContactsForm';

const Profile = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} height={{ md: '100%' }}>
        <AboutCard />
      </Grid>

      <Grid item xs={12} md={6} height={{ md: '100%' }}>
        <ContactsForm />
      </Grid>
    </Grid>
  );
};

export default Profile;
