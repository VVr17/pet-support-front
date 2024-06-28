import { Box, Button } from '@mui/material';

import { BASE_URL } from '@/api/config';
import GoogleIcon from '@/assets/icons/socials/google.svg?react';

const GoogleLoginButton = () => {
  // Opens Google OAauth window
  const googleLogin = async () => {
    try {
      window.open(`${BASE_URL}/auth/google/callback`, 'self');
    } catch (error) {
      console.log('Error during google OAuth', error);
    }
  };

  return (
    <Box maxWidth={700} mx="auto">
      <Button
        variant="outlined"
        onClick={googleLogin}
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
