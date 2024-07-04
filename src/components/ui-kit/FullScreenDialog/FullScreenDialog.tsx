import CloseIcon from '@mui/icons-material/Close';
import {
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { ReactNode } from 'react';

import { dialogStyles, iconButtonStyles } from './styles';

interface IFullScreenDialogProps extends DialogProps {
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const FullScreenDialog: React.FC<IFullScreenDialogProps> = ({
  onClose,
  title,
  children,
  ...other
}) => {
  return (
    <Dialog
      aria-labelledby={`${title} dialog`}
      fullScreen={true}
      onClose={onClose}
      {...other}
      sx={dialogStyles}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} textAlign="center">
        {title}
      </DialogTitle>
      <IconButton aria-label="close" onClick={onClose} sx={iconButtonStyles}>
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};

export default FullScreenDialog;
