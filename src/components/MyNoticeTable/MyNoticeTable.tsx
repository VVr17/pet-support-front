import { useMyNotices, useUser } from '@/hooks/useQuery/useUser';
import { Table, TableBody, TableContainer, Paper } from '@mui/material';
import { useMemo, useState } from 'react';
import NoticeTableHeader from './components/NoticeTableHeader';
import NoticeTableRow from './components/NoticeTableRow';
import { getRows } from './utils/getRows';
import { getComparator } from '../../utils/getSortTableComparator';
import { tableStyles } from './styles';
import Loader from '../ui-kit/Loader';

const MyNoticeTable = () => {
  const { data: user } = useUser();
  const { data: notices, isLoading } = useMyNotices(user?.id);

  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof MyNoticeData>('title');

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
                <NoticeTableRow key={row.id} notice={row} />
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>

      <Loader open={isLoading} />
    </>
  );
};

export default MyNoticeTable;
