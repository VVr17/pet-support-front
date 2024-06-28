import { Theme, Typography } from '@mui/material';

import NoticeTable from '@/components/NoticeTable';
import Loader from '@/components/ui-kit/Loader';

import { useMyFavorites } from '@/hooks/useQuery/useFavorites';
import { useUserStore } from '@/store/useUserStore';

const MyFavorites = () => {
  const { user } = useUserStore();
  const { data: favorites, isLoading } = useMyFavorites(user?.id);

  return (
    <>
      <Typography variant="h3" component="h2" fontWeight={600} mb={3}>
        My favorite notices
      </Typography>

      {favorites && favorites.length > 0 && (
        <NoticeTable notices={favorites} type="favorite" />
      )}

      {favorites?.length === 0 && (
        <Typography
          variant="h4"
          component="p"
          fontWeight={500}
          color={(theme: Theme) => theme.palette.grey[600]}
        >
          You didn't have favorite notices yet.
        </Typography>
      )}

      <Loader open={isLoading} />
    </>
  );
};

export default MyFavorites;
