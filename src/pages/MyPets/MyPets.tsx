import MyPetsTable from '@/components/MyPetsTable';
import { Typography } from '@mui/material';

const MyPets = () => {
  return (
    <>
      <Typography variant="h3" component="h2" fontWeight={600} mb={3}>
        My pets
      </Typography>
      <MyPetsTable />
    </>
  );
};

export default MyPets;
