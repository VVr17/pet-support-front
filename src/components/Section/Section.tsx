import { ReactNode } from "react";
import { Box, Container, BoxProps } from "@mui/material";

interface ISectionProps extends BoxProps {
  children?: ReactNode;
}
const Section: React.FC<ISectionProps> = ({ children, ...props }) => {
  return (
    <Box
      component="section"
      color="text.primary"
      pt={{ xs: 5, md: 10 }}
      pb={{ xs: 5, md: 12.5 }}
      {...props}
    >
      <Container>{children}</Container>
    </Box>
  );
};

export default Section;
