import { Theme } from '@mui/material';

export const dialogStyles = {
  '& .MuiDialogTitle-root': { py: 2, px: 3, fontSize: '1.5rem' },
  '& .MuiDialogContent-root': { p: 3 },

  '& .MuiDialogContent-root::-webkit-scrollbar': {
    width: '6px',
    backgroundColor: '#f5f5f5',
  },
  '& .MuiDialogContent-root::-webkit-scrollbar-track': {
    background: '#fff',
  },
  '& .MuiDialogContent-root::-webkit-scrollbar-thumb': {
    backgroundColor: 'lightgray',
    borderRadius: '20px',
  },
  '& .MuiDialogContent-root::-webkit-scrollbar-thumb:hover': {
    background: 'gray',
    cursor: 'pointer',
  },
};

export const iconButtonStyles = {
  position: 'absolute',
  right: 8,
  top: 8,
  color: (theme: Theme) => theme.palette.grey[500],
};
