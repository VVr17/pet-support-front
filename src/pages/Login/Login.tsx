import { Link as MUILink, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import AuthForm from '@/components/Auth/AuthForm';
import GoogleLogin from '@/components/Auth/GoogleLogin';
import Section from '@/components/Section';
import { ROUTES } from '@/utils/constants/routes';

const Login = () => {
  return (
    <Section>
      <Typography variant="h2" textAlign="center" mb={2}>
        Log in
      </Typography>
      <Typography variant="subtitle1" textAlign="center" mb={5}>
        To ensure a personalized experience, we invite you to log in to your
        account.
      </Typography>
      <AuthForm />

      <GoogleLogin />

      <Typography textAlign="center">
        Don't have an account?{' '}
        <MUILink
          component={Link}
          to={ROUTES.signup}
          underline="hover"
          sx={{ color: 'info.main' }}
        >
          Register
        </MUILink>
      </Typography>
    </Section>
  );
};

export default Login;
