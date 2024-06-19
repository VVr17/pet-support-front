import { Backdrop, BackdropProps, CircularProgress } from "@mui/material";

const Loader: React.FC<BackdropProps> = (props) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      {...props}
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default Loader;
