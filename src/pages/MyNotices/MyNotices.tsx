import MyNoticeTable from '@/components/MyNoticeTable';
import { Typography } from '@mui/material';

const MyNotices = () => {
  return (
    <>
      <Typography variant="h3" component="h2" fontWeight={600} mb={3}>
        My notices
      </Typography>
      <MyNoticeTable />
    </>
  );
};

export default MyNotices;
