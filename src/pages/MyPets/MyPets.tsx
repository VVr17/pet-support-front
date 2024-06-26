import MyPetsTable from '@/components/MyPets/MyPetsTable';
import PetFormDialog from '@/components/MyPets/PetFormDialog';
import Loader from '@/components/ui-kit/Loader';
import { useMyPets, useUser } from '@/hooks/useQuery/useUser';
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';

const MyPets = () => {
  const { data: user } = useUser();
  const { data: pets, isLoading } = useMyPets(user?.id);

  const [isModalOpened, setIsModalOpened] = useState(false);

  const toggleModal = () => {
    setIsModalOpened(prevState => !prevState);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h3" component="h2" fontWeight={600}>
          My pets
        </Typography>
        <Button
          variant="contained"
          sx={{ width: 160, height: 'fit-content' }}
          onClick={toggleModal}
        >
          Add new pet
        </Button>
      </Box>

      {pets && pets.length > 0 && <MyPetsTable pets={pets} />}

      {pets?.length === 0 && (
        <Typography variant="h4" component="p">
          You have not added your pets yet
        </Typography>
      )}

      <PetFormDialog
        open={isModalOpened}
        onClose={toggleModal}
        keepMounted={true}
      />

      <Loader open={isLoading} />
    </>
  );
};

export default MyPets;
