import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Section from "@/components/Section";
import { ROUTES } from "@/utils/constants/routes";

const JoinUs = () => {
  return (
    <Section textAlign="center">
      <Typography variant="h2" mb={5}>
        Join Us
      </Typography>
      <Typography variant="subtitle1" mb={5} textAlign="center" mx="auto">
        Become a part of the Cozy House community today. Whether you're
        searching for a lost pet, looking to adopt, or simply want to stay
        informed, Cozy House is here to support you every step of the way.
        Together, we can make a difference in the lives of animals and the
        people who love them.
      </Typography>

      <Typography variant="h3" mb={5}>
        "Cozy House" – Where Pets Find Their Way Home.
      </Typography>

      <Button
        variant="contained"
        component={Link}
        to={ROUTES.login}
        sx={{ width: 300, maxWidth: "100%" }}
      >
        Join Us
      </Button>
    </Section>
  );
};

export default JoinUs;
