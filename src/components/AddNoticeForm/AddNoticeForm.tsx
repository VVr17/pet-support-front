import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Box, Container } from '@mui/material';

import { formSteps } from './steps';

import Confirmation from './steps/Confirmation';

import { formStyles, wrapperStyles } from './styles';
import { formConfig } from './utils/formConfig';
import FormHeader from './components/FormHeader';
import { FormButtons } from './components';

const AddNoticeForm = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Form control using React Hook Form
  const methods = useForm<NoticeForm>(formConfig);
  const { handleSubmit } = methods;

  // Checks whether current step fields are valid and go to the next step
  const handleNext = async () => {
    // Get fields to validate for the current step
    // const fieldsToValidate = stepFields[activeStep - 1];

    // // Trigger validation for fields in the current step
    // let isValidStep = true;
    // for (const field of fieldsToValidate) {
    //   isValidStep = isValidStep && (await trigger(field));
    // }

    // if (isValidStep) {
    //   setActiveStep(prevStep => prevStep + 1);
    // }
    setActiveStep(prevStep => prevStep + 1); // TODO: TEST
  };

  // Handle back step
  const handleBack = () => {
    setActiveStep(prevStep => prevStep - 1);
  };

  // Handle submit form data
  const onSubmit: SubmitHandler<NoticeForm> = async data => {
    console.log('submit', data);

    // const response = await postFleetInquiry(transformedData);

    // If response is successful, go to the final confirmation step after form submit
    // if (response?.status === 200) {
    //   setActiveStep((prevStep) => prevStep + 1);
    //   reset();
    // }

    setActiveStep(prevStep => prevStep + 1); // TODO: TEST

    // // If there is an error, send error message
    // if (response?.status === 400) {
    //   // Send notification
    //   setNotificationIsOpen(true);
    //   setError(response.data);

    //   setTimeout(() => {
    //     setNotificationIsOpen(false);
    //   }, 2500);
    // }
  };

  return (
    <>
      <FormHeader activeStep={activeStep} totalSteps={formSteps.length} />
      <Box
        component="main"
        pt={{
          xs: 5,
          md: activeStep > formSteps.length ? 8.5 : 12.5,
          lg: activeStep > formSteps.length ? 8.5 : 20,
        }}
        pb={{ xs: 3, md: 12.5, lg: 26.5 }}
      >
        <Container sx={wrapperStyles}>
          {activeStep <= formSteps.length && (
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              display="flex"
              flexDirection="column"
              maxWidth={662}
              mx="auto"
              sx={formStyles}
            >
              {/* Form steps */}
              {formSteps.map(({ StepComponent }, index: number) => (
                <Box
                  key={index}
                  display={activeStep === index + 1 ? 'block' : 'none'}
                  mb={{ xs: 5, md: 8, lg: 10 }}
                >
                  <StepComponent methods={methods} />
                </Box>
              ))}

              <FormButtons
                handleNext={handleNext}
                handleBack={handleBack}
                activeStep={activeStep}
                totalSteps={formSteps.length}
              />
            </Box>
          )}

          {/* Confirmation step */}
          {activeStep > formSteps.length && <Confirmation />}
        </Container>
      </Box>
    </>
  );
};

export default AddNoticeForm;
