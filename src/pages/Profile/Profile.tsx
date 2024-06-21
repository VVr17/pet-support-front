import { Grid } from "@mui/material";

import AboutForm from "@/components/Profile/AboutForm";
import ContactsForm from "@/components/Profile/ContactsForm";

const Profile = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} height={{ md: "100%" }}>
        <AboutForm />
      </Grid>

      <Grid item xs={12} md={6} height={{ md: "100%" }}>
        <ContactsForm />
      </Grid>
    </Grid>
  );
};

export default Profile;
