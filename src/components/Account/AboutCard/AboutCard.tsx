import { Paper, Typography } from '@mui/material';

import { useUser } from '@/hooks/useQuery/useUser';

import AboutForm from './AboutForm';
import AvatarUpload from './AvatarUpload';
import { wrapperStyles } from './styles';

const AboutCard = () => {
  const { data: user } = useUser();

  return (
    <Paper sx={wrapperStyles}>
      <Typography variant="h4" mb={4}>
        About
      </Typography>
      {user && <AvatarUpload />}
      {user && <AboutForm />}
    </Paper>
  );
};

export default AboutCard;
