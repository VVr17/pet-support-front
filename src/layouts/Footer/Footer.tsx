import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Box,
  CardMedia,
  Container,
  Grid,
  Link,
  List,
  ListItem,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import ImgUrl from "@/assets/footer/footer-puppy.png";
import Logo from "@/components/ui-kit/Logo";
import { mainNavigation } from "@/utils/constants/routes";

const Footer = () => {
  return (
    <Box
      component="footer"
      pt={5}
      sx={{
        background:
          "radial-gradient(circle at top left, #513D2F 0%, #1A1A1C 100%)",
      }}
    >
      <Container>
        <Grid container spacing={{ xs: 3, md: 2, lg: 3 }}>
          <Grid item xs={12} sm={6} md={5}>
            <Box
              mb={{ xs: 1.5, lg: 3.75 }}
              px={2}
              py={1.5}
              textAlign={{ xs: "center", md: "start" }}
            >
              <Logo type="light" />
            </Box>
            <List>
              <ListItem>
                <Link
                  href="mailto:email@cozy-house.com"
                  color="primary"
                  underline="hover"
                  variant="h5"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 400,
                    width: "100%",
                    justifyContent: { xs: "center", md: "start" },
                  }}
                >
                  <EmailIcon sx={{ mr: 1 }} />
                  email@cozy-house.com
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="tel:+136745677554"
                  color="primary"
                  underline="hover"
                  variant="h5"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 400,
                    width: "100%",
                    justifyContent: { xs: "center", md: "start" },
                  }}
                >
                  <PhoneIcon sx={{ mr: 1 }} />
                  +13 674 567 75 54
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <List>
              {mainNavigation.map(({ href, label }) => (
                <ListItem key={href}>
                  <Link
                    component={RouterLink}
                    to={href}
                    color="primary"
                    underline="hover"
                    variant="h5"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: 400,
                      width: "100%",
                      justifyContent: { xs: "center", md: "start" },
                    }}
                  >
                    {label}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              image={ImgUrl}
              alt="puppy"
              sx={{
                width: { xs: 200, sm: 260 },
                height: { xs: 210, sm: 269 },
                mx: "auto",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
