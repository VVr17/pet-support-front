import { Theme } from '@mui/material';

export const tableStyles = {
  '& .MuiTableRow-head': {
    bgcolor: (theme: Theme) => theme.palette.grey[300],
  },
  '& .MuiTableRow-root:nth-of-type(odd) .MuiTableCell-body': {
    bgcolor: (theme: Theme) => theme.palette.grey[200],
  },
  '& .MuiTableRow-root:hover .MuiTableCell-body': {
    bgcolor: (theme: Theme) => theme.palette.grey[300],
  },
};
