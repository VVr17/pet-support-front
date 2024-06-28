import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, TableCell, TableRow } from '@mui/material';
import dayjs from 'dayjs';
import { useState } from 'react';

import AlertDialog from '@/components/ui-kit/AlertDialog';

interface INoticeRowProps {
  notice: MyNoticeData;
  handleNoticeDelete: (petId: string) => void;
}
const NoticeTableRow: React.FC<INoticeRowProps> = ({
  notice,
  handleNoticeDelete,
}) => {
  const { title, category, name, breed, dateOfBirth, location, price } = notice;
  const [alertIsOpened, setAlertIsOpened] = useState(false);

  return (
    <>
      <TableRow hover tabIndex={-1} sx={{ cursor: 'pointer' }}>
        <TableCell component="th" scope="row">
          {title}
        </TableCell>
        <TableCell>{category}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{breed}</TableCell>
        <TableCell>{dayjs(dateOfBirth).format('DD MMM YYYY')}</TableCell>
        <TableCell>{location}</TableCell>
        <TableCell>{price || '--'}</TableCell>
        <TableCell align="center">
          <IconButton onClick={() => setAlertIsOpened(true)}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>

      <AlertDialog
        open={alertIsOpened}
        onConfirm={() => {
          setAlertIsOpened(false);
          handleNoticeDelete(notice.id);
        }}
        onCancel={() => setAlertIsOpened(false)}
        title={`Do you want to delete your notice: "${notice.title}" ?`}
        subtitle="This data will be deleted irrevocably and cannot be restored."
      />
    </>
  );
};

export default NoticeTableRow;
