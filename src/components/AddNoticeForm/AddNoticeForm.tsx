import { AlertColor, Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { SubmitHandler,useForm } from 'react-hook-form';

import { uploadImage } from '@/helpers/uploadImage';
import { useCategories } from '@/hooks/useQuery/useCategories';
import { useAddNotice } from '@/hooks/useQuery/useNotices';
import { FIRST_STEP } from '@/utils/constants/formSteps';

import Toast from '../ui-kit/Toast';
import { FormButtons } from './components';
import FormHeader from './components/FormHeader';
import { formSteps } from './steps';
import Confirmation from './steps/Confirmation';
import { formStyles, wrapperStyles } from './styles';
import { formConfig, noticeDefaultValues } from './utils/formConfig';
import { getTransformedData } from './utils/getTransformedData';
import { stepFields } from './utils/stepFields';

const AddNoticeForm = () => {
  const { data: categories } = useCategories();
  const [activeStep, setActiveStep] = useState(FIRST_STEP);
  const [isLoading, setIsLoading] = useState(false);

  const addNotice = useAddNotice();

  const [toast, setToast] = useState<{
    message: string;
    type: AlertColor;
  } | null>(null);

  // Form control using React Hook Form
  const methods = useForm<NoticeForm>(formConfig);
  const { handleSubmit, trigger, reset } = methods;

  useEffect(() => {
    if (categories) {
      reset({ ...noticeDefaultValues, categoryId: categories[1].id });
    }
  }, [categories]);

  // Checks whether current step fields are valid and go to the next step
  const handleNext = async () => {
    // Get fields to validate for the current step
    const fieldsToValidate = stepFields[activeStep - 1];

    // Trigger validation for fields in the current step
    let isValidStep = true;
    for (const field of fieldsToValidate) {
      isValidStep = isValidStep && (await trigger(field));
    }

    if (isValidStep) {
      setActiveStep(prevStep => prevStep + 1);
    }
  };

  // Handle back step
  const handleBack = () => {
    setActiveStep(prevStep => prevStep - 1);
  };

  // Handle submit form data
  const onSubmit: SubmitHandler<NoticeForm> = async data => {
    setIsLoading(true);
    try {
      const imageUrl = await uploadImage(data.image);

      if (!imageUrl) {
        setIsLoading(false);
        return;
      }

      const transformedData = getTransformedData(data, imageUrl);

      await addNotice.mutateAsync(transformedData);

      // If response is successful, go to the final confirmation step after form submit
      setToast({
        message: 'Notice has been added successfully',
        type: 'success',
      });
      setActiveStep(prevStep => prevStep + 1);
      reset();
    } catch (error) {
      setToast({
        message: 'Something went wrong. Please, try again later',
        type: 'error',
      });
      return null;
    }

    setIsLoading(false);
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
              maxWidth={600}
              width={{ xs: '100%', md: 600 }}
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
                isLoading={isLoading}
              />
            </Box>
          )}

          {/* Confirmation step */}
          {activeStep > formSteps.length && <Confirmation />}
        </Container>
      </Box>

      {toast && (
        <Toast
          open={!!toast}
          onClose={() => setToast(null)}
          message={toast.message}
          severity={toast.type}
        />
      )}
    </>
  );
};

export default AddNoticeForm;
