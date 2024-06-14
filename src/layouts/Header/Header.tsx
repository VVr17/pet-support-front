import { Box, Container, AppBar, Toolbar, Link } from "@mui/material";

const Header = () => {
  return (
    <Box>
      <Container>
        <AppBar
          position="relative"
          sx={{
            background: "white",
            border: "none",
            boxShadow: "none",
            zIndex: 100,
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >

            <Link>Navigation</Link>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  )
}

export default Header