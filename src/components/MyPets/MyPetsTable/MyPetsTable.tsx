import {
  AlertColor,
  Paper,
  Table,
  TableBody,
  TableContainer,
} from '@mui/material';
import { useMemo, useState } from 'react';

import Loader from '@/components/ui-kit/Loader';
import Toast from '@/components/ui-kit/Toast';
import { useDeletePet } from '@/hooks/useQuery/usePets';

import { getComparator } from '../../../utils/getSortTableComparator';
import PetTableHeader from './components/PetTableHeader';
import PetTableRow from './components/PetTableRow';
import { tableStyles } from './styles';
import { getRows } from './utils/getRows';

interface IMyPetTableProps {
  pets: Pet[];
}
const MyPetsTable: React.FC<IMyPetTableProps> = ({ pets }) => {
  const deletePet = useDeletePet();

  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof MyPetData>('name');

  const [toast, setToast] = useState<{
    message: string;
    type: AlertColor;
  } | null>(null);

  const sortedRows = useMemo(
    () => getRows(pets).sort(getComparator(order, orderBy)),
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

  const handlePetDelete = async (petId: string) => {
    try {
      await deletePet.mutateAsync(petId);
      // If response is successful, go to the final confirmation step after form submit
      setToast({
        message: 'Pet has been deleted',
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
            <PetTableHeader
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {sortedRows.map(pet => (
                <PetTableRow
                  key={pet.id}
                  pet={pet}
                  handlePetDelete={handlePetDelete}
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

      <Loader open={deletePet.isPending} />
    </>
  );
};

export default MyPetsTable;
