import { Box, Typography } from '@mui/material';
import React from 'react';

import { customIconCircleStyles } from '../styles';

interface IProps {
  index: number;
  activeStep: number;
}

const StepperIcon: React.FC<IProps> = ({ index }) => {
  return (
    <Box className="custom-icon" sx={customIconCircleStyles}>
      <Typography
        className="custom-icon-text"
        variant="subtitle1"
        color="inherit"
        fontWeight={600}
      >
        0{index + 1}
      </Typography>
    </Box>
  );
};

export default StepperIcon;
