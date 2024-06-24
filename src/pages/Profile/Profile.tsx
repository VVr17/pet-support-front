import { Grid } from '@mui/material';

import ContactsForm from '@/components/Profile/ContactsForm';
import AboutCard from '@/components/Profile/AboutCard';

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
