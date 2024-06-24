import { LoadingButton } from '@mui/lab';
import { Box, Button } from '@mui/material';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { formConfig } from './formConfig';

import AvatarUpload from '@/components/RHFComponents/AvatarUpload';
import { useUser } from '@/hooks/useQuery/useUser';

const UpdateAvatarForm = () => {
  // const updateUser = useUpdateUser();
  const { data: user } = useUser();

  // Form control using React Hook Form
  const { handleSubmit, control, reset } = useForm<AvatarForm>(formConfig);

  // Handle submit form data
  const onSubmit: SubmitHandler<AvatarForm> = async data => {
    console.log('data', data);
  };

  useEffect(() => {
    if (user) {
      reset({
        avatar: user.photoURL ? user.photoURL : '',
      });
    }
  }, [reset, user]);

  return (
    <>
      {user && (
        <>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            gap={{ xs: 2, md: 2.5 }}
            display="flex"
            flexDirection="column"
            mb={{ xs: 3, md: 5 }}
          >
            <AvatarUpload name="avatar" control={control} />

            <Box display="flex" gap={2}>
              <LoadingButton
                // loading={isLoading}
                variant="contained"
                type="submit"
                size="large"
                loadingPosition="start"
                fullWidth
                startIcon={<></>}
                sx={{
                  '& .MuiLoadingButton-loadingIndicator': {
                    left: '42%',
                  },
                }}
              >
                Upload
              </LoadingButton>
              <Button variant="outlined" size="large" fullWidth>
                Remove
              </Button>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default UpdateAvatarForm;
