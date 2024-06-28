export const confirmationWrapper = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flexGrow: 1,
};

export const getRadioGroupTestDriveStyles = (isMobile: boolean) => ({
  '& .MuiFormGroup-root': {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
    gap: { xs: 2, md: 3 },
  },

  '& .MuiFormControlLabel-root': {
    mb: '0 !important',
  },
});

export const radioGroupCommunicationStyles = {
  '& .MuiFormGroup-root': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: { xs: 2, md: 4 },
  },

  '& .MuiFormControlLabel-root': {
    mb: '0 !important',
  },
};
