import { Grid } from '@mui/material';

import PetCard from './PetCard';

interface IPetListProps {
  notices: Notice[];
}
const PetList: React.FC<IPetListProps> = ({ notices }) => {
  return (
    <Grid container spacing={{ xs: 2, md: 4 }}>
      {notices.map(notice => (
        <Grid key={notice.id} item xs={12} sm={6} lg={3}>
          <PetCard notice={notice} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PetList;
