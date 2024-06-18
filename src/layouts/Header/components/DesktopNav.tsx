import { Box, Button, Link as MUILink, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "@/components/ui-kit/Logo";
import { useUserStore } from "@/store/useUserStore";
import { mainNavigation, ROUTES } from "@/utils/constants/routes";

import UserMenu from "./UserMenu";

interface IDesktopNavProps {
  type: "dark" | "light";
}
const DesktopNav: React.FC<IDesktopNavProps> = ({ type }) => {
  const { user } = useUserStore();

  return (
    <Box
      display={{ xs: "none", md: "flex" }}
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      py={{ md: 3 }}
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
              key={href}
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

        {user ? (
          <UserMenu />
        ) : (
          <Box pt={0.5}>
            <Button variant="contained" component={Link} to={ROUTES.login}>
              Log in
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DesktopNav;
