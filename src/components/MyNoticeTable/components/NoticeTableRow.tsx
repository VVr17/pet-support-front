import { TableCell, TableRow } from '@mui/material';
import dayjs from 'dayjs';

interface INoticeRowProps {
  notice: MyNoticeData;
}
const NoticeTableRow: React.FC<INoticeRowProps> = ({ notice }) => {
  const { title, category, name, breed, dateOfBirth, location, price } = notice;

  return (
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
    </TableRow>
  );
};

export default NoticeTableRow;
