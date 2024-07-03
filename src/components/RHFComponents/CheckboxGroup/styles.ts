import { Theme } from '@mui/material';

export const inputStyles = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#e5e5e5',
      borderRadius: '12px',
    },
    '& input': {
      borderRadius: '12px',
    },
    '& input::placeholder': {
      color: (theme: Theme) => theme.palette.grey[400],
      opacity: 1,
    },
  },

  '& .MuiFormLabel-root.Mui-focused': {
    color: (theme: Theme) => theme.palette.primary.darker,
  },
};
