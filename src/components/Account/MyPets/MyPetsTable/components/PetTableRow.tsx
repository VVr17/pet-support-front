import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, TableCell, TableRow } from '@mui/material';
import dayjs from 'dayjs';
import { useState } from 'react';

import AlertDialog from '@/components/ui-kit/AlertDialog';
import Toast from '@/components/ui-kit/Toast';
import { ToastType } from '@/types/Toast';

import PetFormDialog from '../../PetFormDialog';

interface IPetRowProps {
  pet: MyPetData;
  handlePetDelete: (petId: string) => void;
}
const PetTableRow: React.FC<IPetRowProps> = ({ pet, handlePetDelete }) => {
  const { name, breed, dateOfBirth, comments } = pet;
  const [alertIsOpened, setAlertIsOpened] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false); // Add pet form modal
  const [toast, setToast] = useState<ToastType | null>(null);

  const toggleModal = () => {
    setIsModalOpened(prevState => !prevState);
  };

  return (
    <>
      <TableRow hover tabIndex={-1}>
        <TableCell>{name}</TableCell>
        <TableCell>{breed}</TableCell>
        <TableCell>{dayjs(dateOfBirth).format('DD MMM YYYY')}</TableCell>
        <TableCell>{comments}</TableCell>
        <TableCell align="center">
          <IconButton onClick={toggleModal}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => setAlertIsOpened(true)}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>

      <PetFormDialog
        petId={pet.id}
        open={isModalOpened}
        onClose={toggleModal}
        keepMounted={false}
        setToast={setToast}
      />

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

      {toast && (
        <Toast
          open={!!toast}
          onClose={() => setToast(null)}
          message={toast.message}
          severity={toast.type}
        />
      )}
    </>
  );
};

export default PetTableRow;
