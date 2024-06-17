/* eslint-disable @typescript-eslint/no-unused-vars */
import Logo from "@/components/ui-kit/Logo";
import { mainNavigation } from "@/utils/constants/routes";
import { Box, Button, Link as MUILink, Typography } from "@mui/material";
import UserMenu from "./UserMenu";
import { Link } from "react-router-dom";

interface IDesktopNavProps {
  type: "dark" | "light";
}
const DesktopNav: React.FC<IDesktopNavProps> = ({ type }) => {
  return (
    <Box
      display={{ xs: "none", md: "flex" }}
      width="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        mr={4}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Logo type={type === "light" ? "dark" : "light"} onClick={() => {}} />
      </Box>
      <Box display="flex" alignItems="center">
        <Box display="flex" gap={2} mr={4}>
          {mainNavigation.map(({ href, label }) => (
            <MUILink
              component={Link}
              to={href}
              sx={{
                color: type === "light" ? "text.primary" : "common.white",
                pt: 2.5,
                pb: 2,
              }}
            >
              <Typography
                color="inherit"
                variant="body1"
                textTransform="capitalize"
                display="block"
                fontSize={18}
              >
                {label}
              </Typography>
            </MUILink>
          ))}
        </Box>

        <Box pt={0.5}>
          <Button variant="contained">Log in</Button>
        </Box>
        {/* <UserMenu /> */}
      </Box>
    </Box>
  );
};

export default DesktopNav;
