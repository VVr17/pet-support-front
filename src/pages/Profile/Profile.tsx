import { Grid } from '@mui/material';

import AboutCard from '@/components/Profile/AboutCard';
import ContactsForm from '@/components/Profile/ContactsForm';

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
