import Loader from '@/components/ui-kit/Loader';
import { useUser } from '@/hooks/useQuery/useUser';
import { useUserStore } from '@/store/useUserStore';
import { ROUTES } from '@/utils/constants/routes';
import { Navigate, Outlet } from 'react-router';

// If user is not logged in, redirect to Log in page
const PrivateRoute = () => {
  const { isFetched, isLoading, isFetching } = useUser();
  const { user } = useUserStore();

  return (
    <>
      {!isFetched && <Loader open={isFetching || isLoading} />}

      {isFetched && user && <Outlet />}
      {isFetched && !user && <Navigate to={ROUTES.login} />}
    </>
  );
};

export default PrivateRoute;
