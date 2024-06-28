import { Navigate, Outlet } from 'react-router';

import Loader from '@/components/ui-kit/Loader';
import { useUser } from '@/hooks/useQuery/useUser';
import { useUserStore } from '@/store/useUserStore';
import { ROUTES } from '@/utils/constants/routes';

// If user is logged in, redirect to user's account
const RestrictedRoute = () => {
  const { isFetched, isLoading, isFetching } = useUser();
  const { user } = useUserStore();

  return (
    <>
      {!isFetched && <Loader open={isFetching || isLoading} />}

      {isFetched && !user && <Outlet />}
      {isFetched && user && <Navigate to={ROUTES.account} />}
    </>
  );
};

export default RestrictedRoute;
