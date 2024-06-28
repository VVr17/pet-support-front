import { Box, Button, Theme, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

import MyNoticeTable from '@/components/MyNoticeTable';
import Loader from '@/components/ui-kit/Loader';
import { useMyNotices, useUser } from '@/hooks/useQuery/useUser';
import { ROUTES } from '@/utils/constants/routes';

const MyNotices = () => {
  const { data: user } = useUser();
  const { data: notices, isLoading } = useMyNotices(user?.id);
  const navigate = useNavigate();

  const handleAddNotice = () => {
    navigate(ROUTES.noticeForm);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h3" component="h2" fontWeight={600}>
          My notices
        </Typography>
        <Button
          variant="contained"
          sx={{ width: 160, height: 'fit-content' }}
          onClick={handleAddNotice}
        >
          Add notice
        </Button>
      </Box>

      {notices && notices.length > 0 && <MyNoticeTable notices={notices} />}

      {notices?.length === 0 && (
        <Typography
          variant="h4"
          component="p"
          fontWeight={500}
          color={(theme: Theme) => theme.palette.grey[600]}
        >
          You have not added your notices yet
        </Typography>
      )}

      <Loader open={isLoading} />
    </>
  );
};

export default MyNotices;
