import { AppBar, Container, Toolbar } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { scroller } from "react-scroll";

import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav";

const Header = () => {
  const { pathname } = useLocation();

  const scrollToTop = () => {
    scroller.scrollTo("topOfPage", {
      duration: 400,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  // Scroll to top on page change
  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  return (
    <AppBar
      id="topOfPage"
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
