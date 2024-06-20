import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

import useResponsive from "@/hooks/useResponsive";
import { accountNavigation } from "@/utils/constants/routes";

import { getAccountNavStyles } from "./styles";

interface IAccountNavProps {
  desktopOpen?: boolean;
}

const AccountNav: React.FC<IAccountNavProps> = ({ desktopOpen }) => {
  const isMobile = useResponsive("down", "md");
  const isLargeDesktop = useResponsive("up", "lg");
  const fullTextShown = desktopOpen || isLargeDesktop || isMobile;
  const styles = getAccountNavStyles(fullTextShown);

  return (
    <List>
      {accountNavigation.map(({ label, href, Icon }) => (
        <ListItem key={href} disablePadding sx={{ display: "block" }}>
          <ListItemButton component={Link} to={href} sx={styles.linkStyles}>
            <ListItemIcon sx={styles.iconStyles}>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={label} sx={styles.textStyles} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default AccountNav;
