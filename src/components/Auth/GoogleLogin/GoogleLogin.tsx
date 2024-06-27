import { useGoogleLogin } from '@react-oauth/google';

import { Box, Button } from '@mui/material';
import { getUserData } from '@/api/googleAuth';
import GoogleIcon from '@/assets/icons/socials/google.svg?react';

const GoogleLoginButton = () => {
  const googleAuth = useGoogleLogin({
    onSuccess: async tokenResponse => {
      const data = await getUserData(tokenResponse.access_token);
      console.log('user', data?.user);
    },
    onError: errorResponse => {
      console.log(errorResponse);
    },
  });

  return (
    <Box maxWidth={700} mx="auto">
      <Button
        variant="outlined"
        onClick={() => googleAuth()}
        fullWidth
        startIcon={<GoogleIcon />}
        sx={{ mb: 2, textTransform: 'initial' }}
      >
        Login with Google
      </Button>
    </Box>
  );
};

export default GoogleLoginButton;
