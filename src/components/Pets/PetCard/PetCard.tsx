import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";

import PetDialog from "../PetDialog";

interface IPetProps {
  pet: Notice;
}

const PetCard: React.FC<IPetProps> = ({ pet }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ borderRadius: 3 }}>
        <CardMedia
          component="img"
          src={pet.photoURL}
          sx={{
            width: "100%",
            height: 270,
            objectFit: "cover",
          }}
        />

        <CardContent sx={{ textAlign: "center", px: 2, pb: 3 }}>
          <Typography variant="h5" mb={4} fontWeight={600}>
            {pet.name}
          </Typography>
          <Button
            variant="outlined"
            sx={{ width: "100%" }}
            onClick={handleClickOpen}
          >
            Learn more
          </Button>
        </CardContent>
      </Card>

      <PetDialog
        open={open}
        onClose={handleClose}
        pet={pet}
        keepMounted={false}
      />
    </>
  );
};

export default PetCard;
