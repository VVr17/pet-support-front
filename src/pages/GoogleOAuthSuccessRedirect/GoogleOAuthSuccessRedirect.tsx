import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { authHeader } from '@/api/config';
import Loader from '@/components/ui-kit/Loader';
import { useUser } from '@/hooks/useQuery/useUser';
import { useUserStore } from '@/store/useUserStore';
import { JWT_TOKEN_KEY } from '@/utils/constants/localStorageKeys';
import { ROUTES } from '@/utils/constants/routes';

const GoogleOAuthSuccessRedirect = () => {
  const { accessToken } = useParams();
  const navigate = useNavigate();

  const { refetch } = useUser();
  const { setUser, setToken } = useUserStore();

  // Fetch current User is there is token and it is valid
  useEffect(() => {
    const checkToken = async () => {
      // Navigate to login if there is no access token
      if (!accessToken) {
        navigate(ROUTES.login);
      }

      try {
        // Set header token and refetch user
        authHeader.setAuthToken(accessToken as string);

        const user = await refetch();

        if (!user.data) {
          throw new Error('Invalid token');
        }

        setToken(accessToken as string);
        setUser(user.data);
        navigate(ROUTES.account);
      } catch (error) {
        // If there is  an error during user refetch, delete Auth token from Axios Config and Local Storage
        localStorage.removeItem(JWT_TOKEN_KEY); // Remove token from Local Storage
        authHeader.deleteAuthToken(); // Delete Auth token from axios headers
        setUser(null);
        setToken(null);
      }
    };

    checkToken();
  }, [refetch, setUser, setToken, accessToken, navigate]);

  return (
    <>
      <Loader open={true} />
    </>
  );
};

export default GoogleOAuthSuccessRedirect;
