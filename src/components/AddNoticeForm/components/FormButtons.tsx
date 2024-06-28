import { LoadingButton } from '@mui/lab';
import { Box, Button, Theme } from '@mui/material';

interface IProps {
  handleNext: () => void;
  handleBack: () => void;
  activeStep: number;
  totalSteps: number;
  isLoading: boolean;
}

const FormButtons: React.FC<IProps> = ({
  handleNext,
  activeStep,
  totalSteps,
  handleBack,
  isLoading,
}) => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      gap={{ xs: 2, md: 5 }}
    >
      <Button
        variant="outlined"
        type="button"
        fullWidth
        sx={{
          color: 'text.primary',
          borderColor: (theme: Theme) => theme.palette.grey[200],
          display:
            activeStep > 1 && activeStep <= totalSteps ? 'block' : 'none',
        }}
        onClick={handleBack}
      >
        Back
      </Button>

      <LoadingButton
        loading={isLoading}
        variant="contained"
        type="submit"
        loadingPosition="start"
        fullWidth
        startIcon={<></>}
        sx={{ display: activeStep === totalSteps ? 'flex' : 'none' }}
      >
        Submit
      </LoadingButton>

      <Button
        variant="contained"
        type="button"
        fullWidth
        sx={{ display: activeStep < totalSteps ? 'block' : 'none' }}
        onClick={handleNext}
      >
        Continue
      </Button>
    </Box>
  );
};

export default FormButtons;
