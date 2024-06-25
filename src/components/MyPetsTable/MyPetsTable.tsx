import { useMyPets, useUser } from '@/hooks/useQuery/useUser';
import { Table, TableBody, TableContainer, Paper } from '@mui/material';
import { useMemo, useState } from 'react';
import { getRows } from './utils/getRows';
import { getComparator } from '../../utils/getSortTableComparator';
import PetTableHeader from './components/PetTableHeader';
import PetTableRow from './components/PetTableRow';
import { tableStyles } from './styles';
import Loader from '../ui-kit/Loader';

const MyPetsTable = () => {
  const { data: user } = useUser();
  const { data: pets, isLoading } = useMyPets(user?.id);

  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof MyPetData>('name');

  const sortedRows = useMemo(
    () => getRows(pets)?.sort(getComparator(order, orderBy)),
    [order, orderBy, pets],
  );

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof MyPetData,
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
            <PetTableHeader
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {sortedRows.map(pet => (
                <PetTableRow key={pet.id} pet={pet} />
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>

      <Loader open={isLoading} />
    </>
  );
};

export default MyPetsTable;
