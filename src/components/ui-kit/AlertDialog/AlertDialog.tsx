import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import * as React from 'react';

import { dialogStyles } from './styles';

interface IAlertDialogProps {
  open: boolean;
  title: string;
  subtitle?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const AlertDialog: React.FC<IAlertDialogProps> = ({
  open,
  onConfirm,
  onCancel,
  title,
  subtitle,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={dialogStyles}
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      {subtitle && (
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {subtitle}
          </DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <Button variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="contained" onClick={onConfirm} autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
