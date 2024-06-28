import CloseIcon from '@mui/icons-material/Close';
import {
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

import { ToastType } from '@/types/Toast';

import UpdateNoticeForm from '../UpdateNoticeForm';
import { dialogStyles, iconButtonStyles } from './styles';

interface IPetFormDialogProps extends DialogProps {
  noticeId: string;
  setToast: Dispatch<SetStateAction<ToastType | null>>;
  onClose: () => void;
}

const PetFormDialog: React.FC<IPetFormDialogProps> = ({
  onClose,
  noticeId,
  setToast,
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
        Update notice
      </DialogTitle>
      <IconButton aria-label="close" onClick={onClose} sx={iconButtonStyles}>
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <UpdateNoticeForm
          noticeId={noticeId}
          onClose={onClose}
          setToast={setToast}
        />
      </DialogContent>
    </Dialog>
  );
};

export default PetFormDialog;
