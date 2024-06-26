import { Backdrop, BackdropProps, CircularProgress } from '@mui/material';
import { createPortal } from 'react-dom';

const Loader: React.FC<BackdropProps> = props => {
  return createPortal(
    <Backdrop
      sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
      {...props}
    >
      <CircularProgress color="primary" />
    </Backdrop>,
    document.getElementById('loader-root')!,
  );
};

export default Loader;
