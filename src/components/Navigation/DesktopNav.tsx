import { Box, Button, Link as MUILink, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

import Logo from "@/components/ui-kit/Logo";
import { useUser } from "@/hooks/useQuery/useUser";
import { useUserStore } from "@/store/useUserStore";
import { mainNavigation, ROUTES } from "@/utils/constants/routes";

import UserMenu from "../UserMenu";
import { getDesktopNavLinkStyles } from "./styles";

interface IDesktopNavProps {
  type: "dark" | "light";
}
const DesktopNav: React.FC<IDesktopNavProps> = ({ type }) => {
  const { user } = useUserStore();
  const { isPending } = useUser();

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
        pt={1.5}
        pb={2.5}
      >
        <Logo type={type === "light" ? "dark" : "light"} />
      </Box>
      <Box display="flex" alignItems="center">
        <Box display="flex" gap={4} mr={4}>
          {mainNavigation.map(({ href, label }) => (
            <MUILink
              key={href}
              component={NavLink}
              to={href}
              underline="none"
              sx={getDesktopNavLinkStyles(type)}
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

        {/* Show user menu if user is logged in, otherwise show log in button */}
        {!isPending && user && <UserMenu />}
        {!isPending && !user && (
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
