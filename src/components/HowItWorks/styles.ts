import { Theme } from '@mui/material';

// ----------- Stepper Container --------------
export const stepperOuterContainerStyles = {
  position: 'sticky',
  top: { xs: '24px', md: '48px' },
  textAlign: 'center',
};

export const stepperInnerContainerStyles = {
  display: 'flex',
  flexDirection: { xs: 'row', md: 'column' },
  overflow: 'auto',
};

// ----------- Stepper styles ---------------
export const getStepperStyles = (theme: Theme) => ({
  mx: 'auto',
  width: 'fit-content',

  '& .MuiStepLabel-iconContainer': {
    pr: 0,
  },

  // Step icon styles
  '& .MuiStepLabel-iconContainer .custom-icon': {
    bgcolor: '#F9FAFC',
    border: '1px solid #EDEDED',
  },
  '& .MuiStepLabel-iconContainer.Mui-active .custom-icon': {
    bgcolor: `${theme.palette.text.primary}`,
    border: `1px solid ${theme.palette.text.primary}`,
  },

  '& .MuiStepLabel-iconContainer.Mui-active .custom-icon .custom-icon-text': {
    color: 'white',
  },

  '& .MuiStepLabel-iconContainer.Mui-completed': {
    color: 'white',
  },

  '& .MuiStepLabel-iconContainer.Mui-completed .custom-icon': {
    bgcolor: `${theme.palette.text.primary}`,
    border: `1px solid ${theme.palette.text.primary}`,
  },

  '& .MuiStep-horizontal': {
    paddingLeft: 0,
    paddingRight: 0,
  },

  // Step connector styles
  '& .MuiStepConnector-root': {
    ml: { xs: 0.5, md: 2.75 },
    mr: { xs: 0.5, md: 0 },
    mt: { xs: 2.5, md: 0 },
  },

  '& .MuiStepConnector-line': {
    minHeight: { xs: '20px', md: '54px' },
    minWidth: { xs: '24px' },
  },

  '& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line': {
    borderColor: 'black',
  },

  '& .MuiStepConnector-root.Mui-active .MuiStepConnector-line': {
    borderColor: 'black',
  },
});

// ----------- Stepper Icon Button --------------
export const customIconCircleStyles = {
  width: 44,
  height: 44,
  boxSizing: 'border-box',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

//  --------- Image styles -------------------
export const imageContainerStyles = {
  display: 'flex',
  flexDirections: 'column',
  justifyContent: { xs: 'center', md: 'start' },
  alignItems: 'center',
};

export const imageWrapperStyles = {
  width: { xs: '100%' },
  maxWidth: { xs: 343, md: 562 },
  mx: 'auto',
  borderRadius: '20px',

  img: { width: '100%', height: 'auto' },
};

// ----------- Details List styles -------------
export const detailsStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  mb: 4,
  gap: 1,
  pl: 2,
  listStyleType: 'disc',
};

export const getListItemStyles = (theme: Theme) => ({
  display: 'list-item',
  width: { xs: 'fit-content', md: '100%' },

  '&::marker': {
    color: theme.palette.primary.main,
  },
});
