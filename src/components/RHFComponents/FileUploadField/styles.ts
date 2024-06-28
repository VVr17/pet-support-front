import { Theme } from '@mui/material';

export const height = { xs: 200, sm: 300, md: 350, lg: 400 };
export const width = { xs: 200, sm: 300, md: 350, lg: 400 };

export const fallbackStyles = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  bgcolor: (theme: Theme) => theme.palette.grey[300],
};

export const cropperWrapperStyles = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  zIndex: 20,
  width: '100%',
  height,
  transform: 'translate(-50%, -50%)',
  cursor: 'pointer',
};

export const getCropperStyles = (
  isDesktop: boolean,
  isTablet: boolean,
  isLargeMobile: boolean,
) => ({
  height: isDesktop ? 400 : isTablet ? 350 : isLargeMobile ? 300 : 200,
  width: '100%',
});

export const croppedImageStyles = {
  width,
  height,
  pointerEvents: 'none',
  position: 'absolute',
  zIndex: 20,
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  cursor: 'pointer',
};

export const cardMediaStyles = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};
