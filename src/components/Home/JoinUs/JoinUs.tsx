import Section from "@/components/Section";
import { Button, Typography } from "@mui/material";

const JoinUs = () => {
  return (
    <Section>
      <Typography variant="h2">Join Us</Typography>
      <Typography>
        Become a part of the Cozy House community today. Whether you're
        searching for a lost pet, looking to adopt, or simply want to stay
        informed, Cozy House is here to support you every step of the way.
        Together, we can make a difference in the lives of animals and the
        people who love them.
      </Typography>

      <Typography variant="h3">
        Cozy House – Where Pets Find Their Way Home.
      </Typography>

      <Button variant="contained">Join Us</Button>
    </Section>
  );
};

export default JoinUs;
