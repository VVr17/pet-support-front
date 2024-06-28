import { Alert, AlertProps, Snackbar } from '@mui/material';
import Grow from '@mui/material/Grow';
import { createPortal } from 'react-dom';

interface IToastProps extends AlertProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

const Toast: React.FC<IToastProps> = ({ message, open, onClose, ...props }) => {
  return createPortal(
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      onClose={onClose}
      autoHideDuration={3000}
      TransitionComponent={Grow}
    >
      <Alert onClose={onClose} sx={{ width: '100%' }} {...props}>
        {message}
      </Alert>
    </Snackbar>,
    document.getElementById('toast-root')!,
  );
};

export default Toast;
