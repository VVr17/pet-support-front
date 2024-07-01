import { LoadingButton } from '@mui/lab';
import { AlertColor, Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import DatePickerField from '@/components/RHFComponents/DatePickerField';
import Field from '@/components/RHFComponents/Field';
import Toast from '@/components/ui-kit/Toast';
import { useUpdateUser, useUser } from '@/hooks/useQuery/useUser';

import { formConfig } from './utils/formConfig';
import { getDefaultValues } from './utils/getDefaultValues';
import { getFormattedDto } from './utils/getFormattedDto';

const AboutForm = () => {
  const updateUser = useUpdateUser();
  const { data: user, refetch } = useUser();

  const [toast, setToast] = useState<{
    message: string;
    type: AlertColor;
  } | null>(null);

  // Form control using React Hook Form
  const {
    handleSubmit,
    control,
    reset,
    formState: { isDirty },
  } = useForm<AboutForm>(formConfig);

  // Set user data as default from values
  useEffect(() => {
    if (user) {
      reset(getDefaultValues(user));
    }
  }, [reset, user]);

  // Handle submit form data
  const onSubmit: SubmitHandler<AboutForm> = async data => {
    try {
      const formattedData = getFormattedDto(data);
      await updateUser.mutateAsync(formattedData);
      refetch();
      reset(getDefaultValues(formattedData));

      setToast({
        message: 'Your profile updated successfully',
        type: 'success',
      });
    } catch (error) {
      setToast({
        message: 'Something went wrong. Please, try again later',
        type: 'error',
      });
    }
  };

  // Cancel changes
  const cancelChanges = () => {
    if (user) {
      reset(getDefaultValues(user));
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        gap={{ xs: 2, md: 2.5 }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        sx={{ flexGrow: 1 }}
      >
        <Box gap={{ xs: 2, md: 2.5 }} display="flex" flexDirection="column">
          <Field
            name="fullName"
            label="Full name"
            control={control}
            placeholder="Your name"
          />
          <DatePickerField
            name="birthday"
            label="Birthday"
            control={control}
            placeholder="Your birthday"
          />
        </Box>

        <Box display="flex" gap={2} mt={5}>
          <LoadingButton
            loading={updateUser.isPending}
            variant="contained"
            type="submit"
            size="large"
            loadingPosition="start"
            fullWidth
            startIcon={<></>}
            disabled={!isDirty}
          >
            Update
          </LoadingButton>
          <Button
            variant="outlined"
            size="large"
            fullWidth
            onClick={cancelChanges}
          >
            Cancel
          </Button>
        </Box>
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

export default AboutForm;
