import {
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { dialogStyles, iconButtonStyles } from './styles';
import AddPetForm from '../AddPetForm';

interface IPetFormDialogProps extends DialogProps {
  onClose: () => void;
}

const PetFormDialog: React.FC<IPetFormDialogProps> = ({
  onClose,
  ...other
}) => {
  return (
    <Dialog
      aria-labelledby="pet form dialog"
      fullScreen={true}
      onClose={onClose}
      {...other}
      sx={dialogStyles}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} textAlign="center">
        Add your pet
      </DialogTitle>
      <IconButton aria-label="close" onClick={onClose} sx={iconButtonStyles}>
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <AddPetForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default PetFormDialog;
