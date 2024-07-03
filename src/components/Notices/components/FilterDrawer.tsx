import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Drawer, { DrawerProps } from '@mui/material/Drawer';

import FilterForm from './FilterForm';

interface IFilterDrawerProps extends DrawerProps {
  toggleDrawer: () => void;
}

const FilterDrawer = ({
  open,
  toggleDrawer,
  ...restProps
}: IFilterDrawerProps) => {
  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={toggleDrawer}
      ModalProps={{
        keepMounted: true,
      }}
      anchor="right"
      sx={{
        '& .MuiDrawer-paper': {
          position: 'fixed',
          right: 0,
          boxSizing: 'border-box',
          width: '100%',
          maxWidth: 340,
          pt: 6,
          pb: 5,
          px: 2,
        },
      }}
      {...restProps}
    >
      <IconButton
        aria-label="close"
        onClick={toggleDrawer}
        sx={{ position: 'absolute', top: 8, right: 8, color: 'black' }}
      >
        <CloseIcon />
      </IconButton>

      <FilterForm toggleDrawer={toggleDrawer} />
    </Drawer>
  );
};

export default FilterDrawer;
