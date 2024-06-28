import {
  AlertColor,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import Loader from '@/components/ui-kit/Loader';
import Toast from '@/components/ui-kit/Toast';
import {
  useAddToFavorites,
  useMyFavorites,
  useRemoveFromFavorites,
} from '@/hooks/useQuery/useFavorites';
import { useUserStore } from '@/store/useUserStore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PetDialog from '../../PetDialog';
import { imgStyles } from './styles';

interface IPetProps {
  notice: Notice;
}

const PetCard: React.FC<IPetProps> = ({ notice }) => {
  const { user } = useUserStore();
  const { data: favorites } = useMyFavorites(user?.id);
  const isFavorite = !!favorites?.find(favorite => favorite.id === notice.id);

  const addToFavorites = useAddToFavorites();
  const removeFromFavorites = useRemoveFromFavorites();

  const [isModalOpened, setIsModalOpened] = useState(false);

  const [toast, setToast] = useState<{
    message: string;
    type: AlertColor;
  } | null>(null);

  const toggleModal = () => {
    setIsModalOpened(prevState => !prevState);
  };

  const toggleIsFavorite = async () => {
    if (!user) {
      setToast({
        message: 'You need to log in to like notices',
        type: 'info',
      });
      return;
    }

    try {
      if (!isFavorite) {
        await addToFavorites.mutateAsync(notice.id);
      } else {
        await removeFromFavorites.mutateAsync(notice.id);
      }
    } catch (error) {
      setToast({
        message: 'Something went wrong. Please, try again later',
        type: 'error',
      });
    }
  };

  return (
    <>
      <Card sx={{ borderRadius: 3, position: 'relative' }}>
        <Box position="absolute" top={4} right={4}>
          <IconButton sx={{ color: 'primary.main' }} onClick={toggleIsFavorite}>
            {isFavorite ? (
              <FavoriteIcon color="inherit" />
            ) : (
              <FavoriteBorderIcon color="inherit" />
            )}
          </IconButton>
        </Box>

        <CardMedia component="img" src={notice.photoURL} sx={imgStyles} />

        <CardContent sx={{ textAlign: 'center', px: 2, pb: 3 }}>
          <Typography variant="h5" mb={4} fontWeight={600}>
            {notice.name}
          </Typography>
          <Button
            variant="outlined"
            sx={{ width: '100%' }}
            onClick={toggleModal}
          >
            Learn more
          </Button>
        </CardContent>
      </Card>

      <PetDialog
        open={isModalOpened}
        onClose={toggleModal}
        notice={notice}
        keepMounted={false}
      />

      {toast && (
        <Toast
          open={!!toast}
          onClose={() => setToast(null)}
          message={toast.message}
          severity={toast.type}
        />
      )}

      <Loader
        open={addToFavorites.isPending || removeFromFavorites.isPending}
      />
    </>
  );
};

export default PetCard;
