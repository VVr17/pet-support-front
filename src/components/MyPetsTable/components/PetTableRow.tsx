import { TableCell, TableRow } from '@mui/material';
import dayjs from 'dayjs';

interface IPetRowProps {
  pet: MyPetData;
}
const PetTableRow: React.FC<IPetRowProps> = ({ pet }) => {
  const { name, breed, dateOfBirth, comments } = pet;

  return (
    <TableRow hover tabIndex={-1} sx={{ cursor: 'pointer' }}>
      <TableCell>{name}</TableCell>
      <TableCell>{breed}</TableCell>
      <TableCell>{dayjs(dateOfBirth).format('DD MMM YYYY')}</TableCell>
      <TableCell>{comments}</TableCell>
    </TableRow>
  );
};

export default PetTableRow;
