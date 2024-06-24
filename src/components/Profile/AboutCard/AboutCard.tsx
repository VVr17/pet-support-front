import { Paper, Typography } from '@mui/material';
import AboutForm from './AboutForm';
import { useUser } from '@/hooks/useQuery/useUser';
import UpdateAvatarForm from './UpdateAvatarForm';

const AboutCard = () => {
  const { data: user } = useUser();

  return (
    <Paper
      sx={{
        height: { md: '100%' },
        mx: 'auto',
        p: { xs: 2, md: 3 },
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 700,
      }}
    >
      <Typography variant="h4" mb={4}>
        About
      </Typography>
      {user && <UpdateAvatarForm />}
      {user && <AboutForm />}
    </Paper>
  );
};

export default AboutCard;
