import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { ConfirmationCard, FormTitle } from '../components';
import Logo from '@/components/ui-kit/Logo';
import { noticeConfirmation } from '@/utils/staticData/noticeConfirmation';

const Confirmation = () => {
  return (
    <Box
      maxWidth={662}
      mx="auto"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 1,
      }}
    >
      <Box mb={10}>
        {/* Logo */}
        <Box mb={9.75} textAlign="center" display={{ xs: 'none', md: 'block' }}>
          <Logo type="dark" />
        </Box>

        <FormTitle
          title="All is well, we received your notice"
          subtitle="Thank you for choosing Coze home! Your notice will appear here soon"
        />

        <Typography
          variant="h6"
          component="p"
          color={{ xs: '#282828', md: '#585858' }}
          mb={{ xs: 3.75, md: 5.25 }}
          ml={{ xs: 3.5, md: 8 }}
        >
          What’s next?
        </Typography>

        {/* Next steps */}
        <Box display="flex" flexDirection="column" gap={{ xs: 4, md: 7.75 }}>
          {noticeConfirmation.map((item, index) => (
            <ConfirmationCard key={index} {...item} />
          ))}
        </Box>
      </Box>

      <Button variant="contained" type="button" component={Link} to="/">
        Back to home
      </Button>
    </Box>
  );
};

export default Confirmation;
