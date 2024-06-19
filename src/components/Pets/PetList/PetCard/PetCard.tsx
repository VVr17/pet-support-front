import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";

import PetDialog from "../../PetDialog";
import { imgStyles } from "./styles";

interface IPetProps {
  notice: Notice;
}

const PetCard: React.FC<IPetProps> = ({ notice }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const toggleModal = () => {
    setIsModalOpened((prevState) => !prevState);
  };

  return (
    <>
      <Card sx={{ borderRadius: 3 }}>
        <CardMedia component="img" src={notice.photoURL} sx={imgStyles} />

        <CardContent sx={{ textAlign: "center", px: 2, pb: 3 }}>
          <Typography variant="h5" mb={4} fontWeight={600}>
            {notice.name}
          </Typography>
          <Button
            variant="outlined"
            sx={{ width: "100%" }}
            onClick={toggleModal}
          >
            Learn more
          </Button>
        </CardContent>
      </Card>

      <PetDialog
        open={isModalOpened}
        onClose={toggleModal}
        notice={notice}
        keepMounted={false}
      />
    </>
  );
};

export default PetCard;
