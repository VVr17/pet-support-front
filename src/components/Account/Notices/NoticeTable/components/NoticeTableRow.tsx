import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, TableCell, TableRow } from '@mui/material';
import dayjs from 'dayjs';
import { useState } from 'react';

import AlertDialog from '@/components/ui-kit/AlertDialog';
import Toast from '@/components/ui-kit/Toast';
import { ToastType } from '@/types/Toast';

import NoticeFormDialog from '../../NoticeFormDialog';

interface INoticeRowProps {
  notice: MyNoticeData;
  handleNoticeDelete: (noticeId: string) => void;
  handleRemoveFromFavorites: (noticeId: string) => void;
  type: 'my' | 'favorite';
}
const NoticeTableRow: React.FC<INoticeRowProps> = ({
  notice,
  handleNoticeDelete,
  handleRemoveFromFavorites,
  type,
}) => {
  const { title, category, name, breed, dateOfBirth, location, price } = notice;
  const [alertIsOpened, setAlertIsOpened] = useState(false);

  const [isModalOpened, setIsModalOpened] = useState(false); // Edit notice form modal
  const [toast, setToast] = useState<ToastType | null>(null);

  const toggleModal = () => {
    setIsModalOpened(prevState => !prevState);
  };

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
          {type === 'my' && (
            <IconButton onClick={toggleModal}>
              <EditIcon />
            </IconButton>
          )}
          <IconButton onClick={() => setAlertIsOpened(true)}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>

      <AlertDialog
        open={alertIsOpened}
        onConfirm={() => {
          setAlertIsOpened(false);
          if (type === 'my') {
            handleNoticeDelete(notice.id);
          } else {
            handleRemoveFromFavorites(notice.id);
          }
        }}
        onCancel={() => setAlertIsOpened(false)}
        title={
          type === 'my'
            ? `Do you want to delete your notice "${notice.title}" ?`
            : `Do you want to remove notice "${notice.title}" from favorites ?`
        }
        subtitle={
          type === 'my'
            ? 'This data will be deleted irrevocably and cannot be restored.'
            : ''
        }
      />

      <NoticeFormDialog
        open={isModalOpened}
        onClose={toggleModal}
        noticeId={notice.id}
        keepMounted={false}
        setToast={setToast}
      />

      {toast && (
        <Toast
          open={!!toast}
          onClose={() => setToast(null)}
          message={toast.message}
          severity={toast.type}
        />
      )}
    </>
  );
};

export default NoticeTableRow;
