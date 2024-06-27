import { authHeader } from '@/api/config';
import Loader from '@/components/ui-kit/Loader';
import { useUser } from '@/hooks/useQuery/useUser';
import { useUserStore } from '@/store/useUserStore';
import { JWT_TOKEN_KEY } from '@/utils/constants/localStorageKeys';
import { ROUTES } from '@/utils/constants/routes';
import React, { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
// import { setAuthTokens } from 'redux/features/auth/authSlice';
// import { useAppDispatch } from 'redux/hooks';

type Props = {};

const GoogleOAuthSuccessRedirect = (props: Props) => {
  let { accessToken } = useParams();

  console.log('accessToken', accessToken);
  const navigate = useNavigate();

  const { refetch } = useUser();
  const { setUser, setToken } = useUserStore();

  // Fetch current User is there is token and it is valid
  useEffect(() => {
    const checkToken = async () => {
      if (!accessToken) {
        navigate(ROUTES.login);
      }
      authHeader.setAuthToken(accessToken as string);

      const user = await refetch();

      if (!user.data) {
        throw new Error('Invalid token');
      }

      setToken(accessToken as string);
      setUser(user.data);
      navigate(ROUTES.account);
    };
    checkToken();
  }, [refetch, setUser, setToken]);

  return (
    <>
      <Loader open={true} />
    </>
  );
};

export default GoogleOAuthSuccessRedirect;
