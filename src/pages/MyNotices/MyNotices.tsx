import { useMyNotices } from '@/hooks/useQuery/useUser';
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

const MyNotices = () => {
  const { data: notices } = useMyNotices();

  return (
    <>
      <Typography variant="h2" fontWeight={600} mb={5}>
        My notices
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Breed</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notices?.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.category.titleEn}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.breed}</TableCell>
                <TableCell>
                  {dayjs(item.dateOfBirth).format('DD MMM YYYY')}
                </TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>{item.price || '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MyNotices;
