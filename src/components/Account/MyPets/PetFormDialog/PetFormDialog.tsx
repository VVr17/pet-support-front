import { DialogProps } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

import FullScreenDialog from '@/components/ui-kit/FullScreenDialog/FullScreenDialog';
import { ToastType } from '@/types/Toast';

import PetForm from '../PetForm';

interface IPetFormDialogProps extends DialogProps {
  onClose: () => void;
  petId?: string;
  setToast?: Dispatch<SetStateAction<ToastType | null>>;
}

const PetFormDialog: React.FC<IPetFormDialogProps> = ({
  onClose,
  petId,
  setToast,
  ...other
}) => {
  return (
    <FullScreenDialog onClose={onClose} title="Add your pet" {...other}>
      <PetForm onClose={onClose} petId={petId} setToast={setToast} />
    </FullScreenDialog>
  );
};

export default PetFormDialog;
