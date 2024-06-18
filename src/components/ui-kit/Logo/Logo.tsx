import { CardMedia, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

import logoDarkUrl from "@/assets/images/logo-dark.png";
import logoLightUrl from "@/assets/images/logo-light.png";

interface IProps {
  type: "light" | "dark";
  onClick?: () => void;
}

const Logo: React.FC<IProps> = ({ type, onClick }) => {
  return (
    <MuiLink
      component={Link}
      onClick={() => {
        onClick && onClick();
      }}
      to="/"
      sx={{
        display: "inline-block",
        width: 160,
        height: "auto",
      }}
    >
      {type === "light" ? (
        <CardMedia
          component="img"
          src={logoLightUrl}
          sx={{ width: "100%", height: "100%" }}
        />
      ) : (
        <CardMedia
          component="img"
          src={logoDarkUrl}
          sx={{ width: "100%", height: "100%" }}
        />
      )}
    </MuiLink>
  );
};

export default Logo;
