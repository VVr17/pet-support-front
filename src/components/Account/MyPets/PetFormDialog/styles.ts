import { Theme } from '@mui/material';

export const dialogStyles = {
  '& .MuiDialogTitle-root': { py: 2, px: 3, fontSize: '1.5rem' },
  '& .MuiDialogContent-root': { p: 3 },
};

export const iconButtonStyles = {
  position: 'absolute',
  right: 8,
  top: 8,
  color: (theme: Theme) => theme.palette.grey[500],
};
