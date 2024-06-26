import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';

import { logIn, signUp } from '@/api/auth';
import Field from '@/components/RHFComponents/Field';
import Toast from '@/components/ui-kit/Toast';
import { useUserStore } from '@/store/useUserStore';
import { ROUTES } from '@/utils/constants/routes';

import { logInButtonStyles } from './styles';
import { formConfig } from './formConfig';

const AuthForm = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { setUser, setToken } = useUserStore();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form control using React Hook Form
  const { handleSubmit, control, reset } = useForm<AuthForm>(formConfig);

  // Handle submit form data
  const onSubmit: SubmitHandler<AuthForm> = async data => {
    try {
      setIsLoading(true);
      let response: LoginResponse;

      if (pathname === ROUTES.login) {
        response = await logIn(data);
      } else {
        response = await signUp(data);
      }

      setToken(response.access_token);
      setUser(response.data);
      navigate(ROUTES.account);
      setIsLoading(false);
      reset();
    } catch (error) {
      if (pathname === ROUTES.login) {
        setError('Email or password is not valid');
      } else {
        setError('Something went wrong. Please, try again later');
      }
      setIsLoading(false);
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        gap={{ xs: 2, md: 2.5 }}
        display="flex"
        flexDirection="column"
        mb={{ xs: 3, md: 2 }}
        maxWidth={700}
        mx="auto"
      >
        <Field
          name="email"
          label="Email"
          control={control}
          placeholder="Your email"
        />
        <Field
          label="Password"
          name="password"
          type="password"
          control={control}
          placeholder="Password"
        />

        <LoadingButton
          loading={isLoading}
          variant="contained"
          type="submit"
          size="large"
          loadingPosition="start"
          startIcon={<></>}
          sx={logInButtonStyles}
        >
          <span>{pathname === ROUTES.login ? 'Log in' : 'Sign up'}</span>
        </LoadingButton>
      </Box>

      {error && (
        <Toast
          open={!!error}
          onClose={() => setError(null)}
          message={error}
          severity="error"
        />
      )}
    </>
  );
};

export default AuthForm;
