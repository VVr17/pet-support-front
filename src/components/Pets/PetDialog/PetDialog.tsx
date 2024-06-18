import CloseIcon from "@mui/icons-material/Close";
import {
  Card,
  CardContent,
  CardMedia,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import * as React from "react";

export interface IPetProps {
  pet: Notice;
  keepMounted: boolean;
  open: boolean;
  onClose: () => void;
}

const PetDialog: React.FC<IPetProps> = (props) => {
  const { onClose, open, pet, ...other } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullScreen={fullScreen}
      {...other}
      sx={{
        "& .MuiDialogContent-root": {
          padding: theme.spacing(2),
        },
        "& .MuiDialogActions-root": {
          padding: theme.spacing(1),
        },
        "& .MuiDialog-paper": {
          width: { xs: "100%", md: "80%" },
          maxWidth: "80%",
          maxHeight: "80%",
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Modal title
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Card
          sx={{
            borderRadius: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
          }}
        >
          <CardMedia
            component="img"
            src={pet.photoURL}
            sx={{
              width: 300,
              height: 300,
              objectFit: "cover",
            }}
          />

          <CardContent sx={{ textAlign: "center", px: 2, pb: 3 }}>
            <Typography variant="h5" mb={4} fontWeight={600}>
              {pet.name}
            </Typography>
            <Typography variant="h5" mb={4} fontWeight={600}>
              {pet.Owner.email}
            </Typography>
            <Typography variant="h5" mb={4} fontWeight={600}>
              {pet.Owner.phone}
            </Typography>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default PetDialog;
