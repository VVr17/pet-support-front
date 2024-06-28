import {
  AlertColor,
  Paper,
  Table,
  TableBody,
  TableContainer,
} from '@mui/material';
import { useMemo, useState } from 'react';

import { useDeleteNotice } from '@/hooks/useQuery/useNotices';

import { getComparator } from '../../utils/getSortTableComparator';
import Loader from '../ui-kit/Loader';
import Toast from '../ui-kit/Toast';
import NoticeTableHeader from './components/NoticeTableHeader';
import NoticeTableRow from './components/NoticeTableRow';
import { tableStyles } from './styles';
import { getRows } from './utils/getRows';

interface IMyNoticeTableProps {
  notices: Notice[];
}

const MyNoticeTable: React.FC<IMyNoticeTableProps> = ({ notices }) => {
  const deleteNotice = useDeleteNotice();

  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof MyNoticeData>('title');

  const [toast, setToast] = useState<{
    message: string;
    type: AlertColor;
  } | null>(null);

  const sortedRows = useMemo(
    () => getRows(notices)?.sort(getComparator(order, orderBy)),
    [order, orderBy, notices],
  );

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof MyNoticeData,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleNoticeDelete = async (petId: string) => {
    try {
      await deleteNotice.mutateAsync(petId);
      // If response is successful, go to the final confirmation step after form submit
      setToast({
        message: 'Your notice has been deleted',
        type: 'success',
      });
    } catch (error) {
      setToast({
        message: 'Something went wrong. Please, try again later',
        type: 'error',
      });
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        {sortedRows && (
          <Table sx={tableStyles}>
            <NoticeTableHeader
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {sortedRows.map(row => (
                <NoticeTableRow
                  key={row.id}
                  notice={row}
                  handleNoticeDelete={handleNoticeDelete}
                />
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>

      {toast && (
        <Toast
          open={!!toast}
          onClose={() => setToast(null)}
          message={toast.message}
          severity={toast.type}
        />
      )}

      <Loader open={deleteNotice.isPending} />
    </>
  );
};

export default MyNoticeTable;
