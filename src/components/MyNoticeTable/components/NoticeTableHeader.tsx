import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Box,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { headCells } from '../utils/headCells';

interface INoticeHeaderProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof MyNoticeData,
  ) => void;
  order: Order;
  orderBy: string;
}

const NoticeTableHeader = (props: INoticeHeaderProps) => {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof MyNoticeData) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default NoticeTableHeader;
