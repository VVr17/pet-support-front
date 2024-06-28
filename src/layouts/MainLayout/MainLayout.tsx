import { useEffect } from 'react';
import { Outlet } from 'react-router';

import { authHeader } from '@/api/config';
import { useUser } from '@/hooks/useQuery/useUser';
import { useUserStore } from '@/store/useUserStore';
import { JWT_TOKEN_KEY } from '@/utils/constants/localStorageKeys';

const MainLayout = () => {
  const { refetch } = useUser();
  const { setUser, setToken } = useUserStore();

  // Fetch current User is there is token and it is valid
  useEffect(() => {
    const checkToken = async () => {
      const storedToken = localStorage.getItem(JWT_TOKEN_KEY);

      // If there is stored Token, parse token and fetch user
      if (storedToken) {
        const storedData = JSON.parse(storedToken);
        const token = storedData.state.token;

        if (token) {
          authHeader.setAuthToken(token); // Add Auth token to axios headers
        }
      }

      try {
        const user = await refetch();

        if (!user.data) {
          throw new Error('Invalid token');
        }
        setUser(user.data);
      } catch (error) {
        // If there is no User data (in case there is not Token or it is expired) delete Auth token from Axios Config and Local Storage
        localStorage.removeItem(JWT_TOKEN_KEY); // Remove token from Local Storage
        authHeader.deleteAuthToken(); // Delete Auth token from axios headers
        setUser(null);
        setToken(null);
      }
    };

    checkToken();
  }, [refetch, setUser, setToken]);

  return <Outlet />;
};

export default MainLayout;
