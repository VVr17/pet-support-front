import { Box, LinearProgress } from "@mui/material";

interface IProps {
  progress: number;
}

const ProgressBar: React.FC<IProps> = ({ progress }) => {
  return (
    <Box width="100%">
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default ProgressBar;
