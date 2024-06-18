import { Grid } from "@mui/material";

import PetCard from "../PetCard";

interface IPetListProps {
  pets: Notice[];
}
const PetList: React.FC<IPetListProps> = ({ pets }) => {
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {pets.map((notice) => (
          <Grid key={notice.id} item xs={12} sm={6} lg={3}>
            <PetCard pet={notice} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PetList;
