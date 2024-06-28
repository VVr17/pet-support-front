import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, TableCell, TableRow } from '@mui/material';
import dayjs from 'dayjs';
import { useState } from 'react';

import AlertDialog from '@/components/ui-kit/AlertDialog';

interface IPetRowProps {
  pet: MyPetData;
  handlePetDelete: (petId: string) => void;
}
const PetTableRow: React.FC<IPetRowProps> = ({ pet, handlePetDelete }) => {
  const { name, breed, dateOfBirth, comments } = pet;
  const [alertIsOpened, setAlertIsOpened] = useState(false);

  return (
    <>
      <TableRow hover tabIndex={-1}>
        <TableCell>{name}</TableCell>
        <TableCell>{breed}</TableCell>
        <TableCell>{dayjs(dateOfBirth).format('DD MMM YYYY')}</TableCell>
        <TableCell>{comments}</TableCell>
        <TableCell align="center">
          <IconButton onClick={() => setAlertIsOpened(true)}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>

      <AlertDialog
        open={alertIsOpened}
        onConfirm={() => {
          setAlertIsOpened(false);
          handlePetDelete(pet.id);
        }}
        onCancel={() => setAlertIsOpened(false)}
        title={`Do you want to delete your pet "${pet.name}" data?`}
        subtitle="This data will be deleted irrevocably and cannot be restored."
      />
    </>
  );
};

export default PetTableRow;
