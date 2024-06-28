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
