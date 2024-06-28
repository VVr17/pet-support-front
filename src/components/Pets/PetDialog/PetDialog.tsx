import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Card,
  CardMedia,
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';

import PetInfoTable from './components/PetInfoTable';
import {
  cardStyles,
  cardWrapperStyles,
  dialogStyles,
  iconButtonStyles,
  imgStyles,
} from './styles';

export interface IPetDialogProps extends DialogProps {
  notice: Notice;
  onClose: () => void;
}

const PetDialog: React.FC<IPetDialogProps> = ({
  notice,
  onClose,
  ...other
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      aria-labelledby="pet card dialog"
      fullScreen={fullScreen}
      onClose={onClose}
      {...other}
      sx={dialogStyles}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>{notice.title}</DialogTitle>
      <IconButton aria-label="close" onClick={onClose} sx={iconButtonStyles}>
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Card sx={cardStyles}>
          <Box sx={cardWrapperStyles}>
            <CardMedia component="img" src={notice.photoURL} sx={imgStyles} />
            <PetInfoTable notice={notice} />
          </Box>
          <Typography variant="subtitle2" fontSize={'1rem'}>
            <Typography component="span" fontWeight={600}>
              Comments:{' '}
            </Typography>
            {notice.comments}
          </Typography>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default PetDialog;
