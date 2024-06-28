import { Theme } from '@mui/material';

export const inputPropsStyles = {
  style: { paddingLeft: '12px' },
};

export const inputStyles = {
  '& .MuiTouchRipple-root': {
    display: 'none',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#e5e5e5',
      borderRadius: 3,
    },
    '& input': {
      borderLeft: '1px solid #e5e5e5',
    },
    '& input::placeholder': {
      color: (theme: Theme) => theme.palette.grey[400],
      opacity: 1,
    },
  },

  '& .MuiPaper-root': {
    maxHeight: '200px',
    overflowY: 'scroll',
  },

  '& .MuiInputBase-root': {
    pl: 0,
  },
  '& .MuiIconButton-root': {
    borderRadius: 0,
    pr: 2.5,
  },
  '& .MuiIconButton-root:hover': {
    borderRadius: 0,
  },

  '& .MuiTelInput-Flag': {
    width: 24,
    height: 24,
    borderRadius: 100,
    overflow: 'hidden',
  },

  '& .MuiTelInput-Flag img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export const iconWrapperStyles = {
  top: '50%',
  left: '32px',
  transform: 'translateY(-50%)',
  zIndex: 1,
  pointerEvents: 'none',
};
