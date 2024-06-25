import { Box, Button, useTheme } from "@mui/material";

interface IProps {
  handleNext: () => void;
  handleBack: () => void;
  activeStep: number;
  totalSteps: number;
}

const FormButtons: React.FC<IProps> = ({
  handleNext,
  activeStep,
  totalSteps,
  handleBack,
}) => {
  const theme = useTheme();

  return (
    <Box width="100%" display="flex" gap={{ xs: 2, md: 5 }}>
      <Button
        variant="outlined"
        type="button"
        fullWidth
        sx={{
          color: "text.primary",
          borderColor: theme.palette.grey[200],
          display:
            activeStep > 1 && activeStep <= totalSteps ? "block" : "none",
        }}
        onClick={handleBack}
      >
        Back
      </Button>
      <Button
        variant="contained"
        type="submit"
        fullWidth
        sx={{ display: activeStep === totalSteps ? "block" : "none" }}
      >
        Submit
      </Button>

      <Button
        variant="contained"
        type="button"
        fullWidth
        sx={{ display: activeStep < totalSteps ? "block" : "none" }}
        onClick={handleNext}
      >
        Continue
      </Button>
    </Box>
  );
};

export default FormButtons;
