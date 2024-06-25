import { useEffect } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import { scroller } from 'react-scroll';
import { useNavigate } from 'react-router';

import Close from '@mui/icons-material/Close';
import ProgressBar from './ProgressBar';
import { appBarStyles, getToolbarStyles } from './styles';
import Logo from '@/components/ui-kit/Logo';

interface IProps {
  activeStep: number;
  totalSteps: number;
}

const FormHeader: React.FC<IProps> = ({ activeStep, totalSteps }) => {
  const navigate = useNavigate();
  const formIsInProgress = activeStep <= totalSteps;
  const progress = (activeStep * 100) / totalSteps;

  const scrollToTop = () => {
    scroller.scrollTo('topOfPage', {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  // Scroll to top on page change
  useEffect(() => {
    scrollToTop();
  }, [activeStep]);

  // Go back to the previous page
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box component="header" id="topOfPage">
      <Container>
        <AppBar position="relative" sx={appBarStyles}>
          <Toolbar disableGutters sx={getToolbarStyles(formIsInProgress)}>
            {/* Steps */}
            {formIsInProgress && (
              <Typography
                variant="subtitle1"
                component="p"
                fontSize={{ xs: '1rem', md: '1.125rem', lg: '1.25rem' }}
                fontWeight={700}
                sx={{
                  minWidth: 96,
                }}
              >
                <Typography
                  color="text.accent"
                  fontSize="inherit !important"
                  fontWeight="inherit !important"
                  fontFamily="inherit !important"
                  lineHeight="inherit !important"
                  component="span"
                >
                  0{activeStep}
                </Typography>
                /0{totalSteps}
              </Typography>
            )}

            {/* Logo */}
            <Box
              paddingY={{ xs: 1.75, md: 3, lg: 4.25 }}
              display={{
                xs: 'initial',
                md: formIsInProgress ? 'initial' : 'none',
              }}
            >
              <Logo type="dark" />
            </Box>

            {/* Cancel button */}
            {formIsInProgress && (
              <Button
                onClick={handleBack}
                endIcon={<Close />}
                color="inherit"
                sx={{ fontSize: { xs: '1rem', md: '1.125rem' } }}
              >
                Cancel
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Container>

      {/* Progress bar */}
      {formIsInProgress && <ProgressBar progress={progress} />}
    </Box>
  );
};

export default FormHeader;
