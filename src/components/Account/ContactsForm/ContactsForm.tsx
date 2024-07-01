import { LoadingButton } from '@mui/lab';
import { AlertColor, Box, Button, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Field from '@/components/RHFComponents/Field';
import PhoneInput from '@/components/RHFComponents/PhoneInput';
import Toast from '@/components/ui-kit/Toast';
import { useUpdateUser, useUser } from '@/hooks/useQuery/useUser';

import { wrapperStyles } from './styles';
import { formConfig } from './utils/formConfig';
import { getDefaultValues } from './utils/getDefaultValues';
import { getFormattedDto } from './utils/getFormattedDto';

const ContactsForm = () => {
  const updateUser = useUpdateUser();
  const { data: user, refetch } = useUser();

  // Form control using React Hook Form
  const {
    handleSubmit,
    control,
    reset,
    formState: { isDirty },
  } = useForm<ContactsForm>(formConfig);

  const [toast, setToast] = useState<{
    message: string;
    type: AlertColor;
  } | null>(null);

  // Set user data as default from values
  useEffect(() => {
    if (user) {
      reset(getDefaultValues(user));
    }
  }, [reset, user]);

  // Handle submit form data
  const onSubmit: SubmitHandler<ContactsForm> = async data => {
    try {
      const formattedData = getFormattedDto(data);
      await updateUser.mutateAsync(formattedData);
      refetch();

      reset(getDefaultValues(data));

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
      reset({
        email: user.email,
        phone: user.phone || '',
        location: user.location || '',
      });
    }
  };

  return (
    <>
      <Paper sx={wrapperStyles}>
        <Typography variant="h4" mb={4}>
          Contacts
        </Typography>

        {user && (
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
                name="email"
                label="Email"
                control={control}
                placeholder="Your email"
              />
              <PhoneInput
                name="phone"
                label="Phone"
                control={control}
                placeholder="Your phone"
              />
              <Field
                name="location"
                label="Location"
                control={control}
                placeholder="City, region"
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
        )}
      </Paper>

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

export default ContactsForm;
