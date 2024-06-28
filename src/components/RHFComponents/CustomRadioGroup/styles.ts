export const radioGroupStyles = {
  '& .MuiFormControlLabel-root': {
    paddingY: { xs: 1.5, md: 1.75 },
    paddingX: 2,
    marginX: 0,
    borderRadius: 3,
    '& .MuiRadio-root': {
      padding: 0,
      marginRight: { xs: 1.5, md: 2 },
    },
    ':not(:last-child)': {
      marginBottom: { xs: 2, md: 3 },
    },
    '& .MuiFormControlLabel-label': {
      flex: '1 1 0%',
      display: 'flex',
      justifyContent: 'space-between',
      '& .MuiTypography-root': {
        fontSize: { xs: '1rem', md: '1.125rem' },
        fontWeight: 600,
        '&:first-of-type': {
          fontWeight: 700,
        },
      },
    },
  },
};
