import {
  Box,
  CardMedia,
  Collapse,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useTheme,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';

import useResponsive from '@/hooks/useResponsive';
import { howItWorksData } from '@/utils/staticData/howItWorks';

import Section from '../Section';
import { StepperContentCard, StepperIcon } from './components';
import {
  getStepperStyles,
  imageContainerStyles,
  stepperInnerContainerStyles,
  stepperOuterContainerStyles,
} from './styles';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const stepperRef = useRef<HTMLElement>();
  const containerRef = useRef<HTMLElement>();

  const isMobile = useResponsive('down', 'md');
  const theme = useTheme();

  // Handling scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (stepperRef.current && containerRef.current) {
        const value =
          stepperRef.current.offsetTop - containerRef.current.offsetTop;

        if (value >= 0 && value < 1200) {
          const step = Math.floor(value / 300);
          setActiveStep(step);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Section>
      <Typography variant="h2" mb={4} textAlign="center">
        How it works
      </Typography>

      <Box sx={{ height: '2000px' }} mx="auto" ref={containerRef}>
        <Box ref={stepperRef} sx={stepperOuterContainerStyles}>
          <Grid container spacing={0}>
            {/* Left side desktop - image */}
            {!isMobile && (
              <Grid item xs={12} md={4.5} lg={5} sx={imageContainerStyles}>
                <Box display="flex" flexDirection="column" width="100%">
                  {howItWorksData.map(({ title, imageUrl }, index) => (
                    <Collapse in={activeStep === index} key={index}>
                      <CardMedia
                        component="img"
                        src={imageUrl}
                        alt={title}
                        sx={{ maxWidth: '80%', mx: 'auto' }}
                      />
                    </Collapse>
                  ))}
                </Box>
              </Grid>
            )}

            {/* Central part - stepper */}
            <Grid item xs={12} md={3} lg={2}>
              <Box sx={stepperInnerContainerStyles}>
                <Stepper
                  activeStep={activeStep}
                  orientation={isMobile ? 'horizontal' : 'vertical'}
                  sx={getStepperStyles(theme)}
                >
                  {howItWorksData.map((_, index) => (
                    <Step key={index} id={`step-${index}`}>
                      <StepLabel
                        icon={
                          <StepperIcon index={index} activeStep={activeStep} />
                        }
                      />
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Grid>

            {/* Right side desktop and mobile content card */}
            <Grid item xs={12} md={4.5} lg={5} sx={imageContainerStyles}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems={{ xs: 'center', md: 'start' }}
                pt={{ xs: 3, md: 0 }}
              >
                {howItWorksData.map((data, index) => (
                  <Collapse in={activeStep === index} key={index}>
                    <StepperContentCard data={data} />
                  </Collapse>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Section>
  );
};

export default HowItWorks;
