import { LoadingButton } from '@mui/lab';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Field from '@/components/RHFComponents/Field';
import { useUpdateUser, useUser } from '@/hooks/useQuery/useUser';

import { formConfig } from './formConfig';
import { wrapperStyles } from './styles';

const ContactsForm = () => {
  const updateUser = useUpdateUser();
  const { data: user, refetch } = useUser();

  // Form control using React Hook Form
  const { handleSubmit, control, reset } = useForm<ContactsForm>(formConfig);

  // Set user data as default from values
  useEffect(() => {
    if (user) {
      reset({
        email: user.email,
        phone: user.phone || '',
        location: user.location || '',
      });
    }
  }, [reset, user]);

  // Handle submit form data
  const onSubmit: SubmitHandler<ContactsForm> = async data => {
    await updateUser.mutateAsync(data);
    refetch();
    reset(data);
  };

  return (
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
            <Field
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
            >
              Save changes
            </LoadingButton>
            <Button variant="outlined" size="large" fullWidth>
              Cancel
            </Button>
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default ContactsForm;
