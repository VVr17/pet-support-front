import { AppBar, Toolbar, Container } from "@mui/material";

import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav";
import { useLocation } from "react-router";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <AppBar
      position={pathname === "/" ? "absolute" : "static"}
      sx={{
        background: "transparent",
        boxShadow: "none",
        color: "black",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <MobileNav type={pathname === "/" ? "dark" : "light"} />
          <DesktopNav type={pathname === "/" ? "dark" : "light"} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
