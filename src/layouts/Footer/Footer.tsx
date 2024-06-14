import { Container, Box } from "@mui/material";

const Header = () => {
  return (
    <Box component="footer"
      pt={5}
      pb={{ xs: 2.5, md: 4.25 }}>
      <Container>
        Footer
      </Container>

    </Box>
  )
}

export default Header