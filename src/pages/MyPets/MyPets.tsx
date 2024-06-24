import { useMyPets } from '@/hooks/useQuery/useUser';
import { Typography } from '@mui/material';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import dayjs from 'dayjs';

const MyPets = () => {
  const { data: pets } = useMyPets();

  console.log('pets', pets);

  return (
    <>
      <Typography variant="h2" fontWeight={600} mb={5}>
        My pets
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Breed</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Comments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pets?.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.breed}</TableCell>
                <TableCell>
                  {dayjs(item.dateOfBirth).format('DD MMM YYYY')}
                </TableCell>
                <TableCell>{item.comments}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MyPets;
