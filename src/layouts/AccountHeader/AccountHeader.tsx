import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Toolbar } from '@mui/material';

import DesktopNav from '@/components/Navigation/DesktopNav';
import MobileNav from '@/components/Navigation/MobileNav';
import useResponsive from '@/hooks/useResponsive';

import { AppBarStyled } from './AccountHeader.styled';
import {
  desktopDrawerButtonStyles,
  getToolbarStyles,
  mobileDrawerButtonStyles,
} from './styles';

interface IHeaderProps {
  drawerWidth: number;
  toggleDesktopDrawer: () => void;
  toggleMobileDrawer: () => void;
  desktopOpen?: boolean;
}

const AccountHeader: React.FC<IHeaderProps> = ({
  drawerWidth,
  toggleMobileDrawer,
  toggleDesktopDrawer,
  desktopOpen,
}) => {
  const isTablet = useResponsive('between', 'md', 'xl');
  const isDesktop = useResponsive('up', 'xl');

  return (
    <AppBarStyled
      position="relative"
      open={isDesktop ? true : desktopOpen}
      drawerwidth={drawerWidth}
    >
      <Toolbar sx={getToolbarStyles(isTablet)}>
        {/* Desktop drawer buttons*/}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDesktopDrawer}
          edge="start"
          sx={desktopDrawerButtonStyles}
        >
          {desktopOpen ? (
            <ChevronLeftIcon color="inherit" />
          ) : (
            <MenuIcon color="inherit" />
          )}
        </IconButton>

        {/* Mobile drawer buttons */}
        <IconButton
          color="inherit"
          aria-label="open mobile drawer"
          onClick={toggleMobileDrawer}
          size="large"
          sx={mobileDrawerButtonStyles}
        >
          <MenuIcon />
        </IconButton>

        <MobileNav type="light" />
        <DesktopNav type="light" />
      </Toolbar>
    </AppBarStyled>
  );
};

export default AccountHeader;
