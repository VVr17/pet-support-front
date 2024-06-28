import { LoadingButton } from '@mui/lab';
import { Box, Button } from '@mui/material';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import DatePickerField from '@/components/RHFComponents/DatePickerField';
import Field from '@/components/RHFComponents/Field';
import { useUpdateUser, useUser } from '@/hooks/useQuery/useUser';

import { formConfig } from './formConfig';

const AboutForm = () => {
  const updateUser = useUpdateUser();
  const { data: user, refetch } = useUser();

  // Form control using React Hook Form
  const { handleSubmit, control, reset } = useForm<AboutForm>(formConfig);

  // Set user data as default from values
  useEffect(() => {
    if (user) {
      reset({
        fullName: user.fullName,
        birthday: user.birthday ? dayjs(user.birthday) : null,
      });
    }
  }, [reset, user]);

  // Handle submit form data
  const onSubmit: SubmitHandler<AboutForm> = async data => {
    const formattedData: Partial<User> = {
      ...data,
      birthday: dayjs(data.birthday).toISOString(),
    };

    await updateUser.mutateAsync(formattedData);
    refetch();
    reset({ ...formattedData, birthday: dayjs(formattedData.birthday) });
  };

  return (
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
        >
          Save changes
        </LoadingButton>
        <Button variant="outlined" size="large" fullWidth>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default AboutForm;
