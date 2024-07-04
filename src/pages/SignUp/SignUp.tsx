import { Link as MUILink, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import AuthForm from '@/components/Auth/AuthForm';
import GoogleLogin from '@/components/Auth/GoogleLogin';
import Section from '@/components/Section';
import { ROUTES } from '@/utils/constants/routes';

const SignUp = () => {
  return (
    <Section>
      <Typography variant="h2" textAlign="center" mb={2}>
        Sign up
      </Typography>
      <Typography variant="subtitle1" textAlign="center" mb={5}>
        First time on our site? Please, sign up
      </Typography>
      <AuthForm />

      <GoogleLogin />

      <Typography textAlign="center">
        Already have an account?{' '}
        <MUILink
          component={Link}
          to={ROUTES.login}
          underline="hover"
          sx={{ color: 'info.main' }}
        >
          Login
        </MUILink>
      </Typography>
    </Section>
  );
};

export default SignUp;
