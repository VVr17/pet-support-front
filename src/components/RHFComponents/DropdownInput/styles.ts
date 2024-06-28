export const menuStyles = {
  PaperProps: {
    sx: {
      maxHeight: 210,
      border: `1px solid #EAEFFC`,
      borderRadius: 3,
      boxShadow: 'none',
      overflowY: 'scroll',
      transform: 'translateY(4px) !important',

      '& .MuiList-root': {
        padding: 0,

        '& .MuiMenuItem-root': {
          justifyContent: 'space-between',
          padding: '10px 16px',
          ':hover': {
            backgroundColor: '#EAEFFC',
          },
          '&.Mui-selected': {
            backgroundColor: 'white',
            ':hover': {
              backgroundColor: '#EAEFFC',
            },
          },
        },
      },

      '&::-webkit-scrollbar': {
        width: '6px',
        backgroundColor: '#f5f5f5',
      },
      '&::-webkit-scrollbar-track': {
        background: '#fff',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'lightgray',
        borderRadius: '20px',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background: 'gray',
        cursor: 'pointer',
      },
    },
  },
};

export const getSelectStyles = (isMobile: boolean) => ({
  '& fieldset': {
    borderColor: '#e5e5e5',
    borderRadius: 3,
  },
  '& input': {
    borderRadius: 3,
  },

  fontSize: `${isMobile ? '1rem' : '1.125rem'}`,
  fontWeight: 500,
});
