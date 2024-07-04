import { DialogProps } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

import FullScreenDialog from '@/components/ui-kit/FullScreenDialog/FullScreenDialog';
import { ToastType } from '@/types/Toast';

import UpdateNoticeForm from '../UpdateNoticeForm';

interface INoticeFormDialogProps extends DialogProps {
  noticeId: string;
  setToast: Dispatch<SetStateAction<ToastType | null>>;
  onClose: () => void;
}

const NoticeFormDialog: React.FC<INoticeFormDialogProps> = ({
  onClose,
  noticeId,
  setToast,
  ...other
}) => {
  return (
    <FullScreenDialog onClose={onClose} title="Update notice" {...other}>
      <UpdateNoticeForm
        noticeId={noticeId}
        onClose={onClose}
        setToast={setToast}
      />
    </FullScreenDialog>
  );
};

export default NoticeFormDialog;
