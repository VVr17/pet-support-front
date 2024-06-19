import { CardMedia, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

import logoDarkUrl from "@/assets/images/logo-dark.png";
import logoLightUrl from "@/assets/images/logo-light.png";

import { imgStyles, linkStyles } from "./styles ";

interface ILogoProps {
  type: "light" | "dark";
  onClick?: () => void;
}

const Logo: React.FC<ILogoProps> = ({ type, onClick }) => {
  return (
    <MuiLink
      component={Link}
      onClick={() => {
        onClick && onClick();
      }}
      to="/"
      sx={linkStyles}
    >
      {type === "light" ? (
        <CardMedia component="img" src={logoLightUrl} sx={imgStyles} />
      ) : (
        <CardMedia component="img" src={logoDarkUrl} sx={imgStyles} />
      )}
    </MuiLink>
  );
};

export default Logo;
