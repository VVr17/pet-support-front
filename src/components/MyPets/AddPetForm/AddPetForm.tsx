import { formConfig } from './utils/formConfig';
import { LoadingButton } from '@mui/lab';
import { AlertColor, Box, Button, Theme } from '@mui/material';

import { SubmitHandler, useForm } from 'react-hook-form';

import Field from '@/components/RHFComponents/Field';
import Toast from '@/components/ui-kit/Toast';

import { useState } from 'react';
import DatePickerField from '@/components/RHFComponents/DatePickerField';
import FileUploadField from '@/components/RHFComponents/FileUploadField';
import TextArea from '@/components/RHFComponents/TextArea';
import { getTransformedData } from './utils/getTransformedData';
import { uploadImage } from '@/helpers/uploadImage';
import { useAddPet } from '@/hooks/useQuery/usePets';

interface IPetFormProps {
  onClose: () => void;
}

const AddPetForm: React.FC<IPetFormProps> = ({ onClose }) => {
  // Form control using React Hook Form
  const methods = useForm<PetForm>(formConfig);
  const { handleSubmit, control, reset } = methods;

  const addPet = useAddPet();
  const [isLoading, setIsLoading] = useState(false);

  const [toast, setToast] = useState<{
    message: string;
    type: AlertColor;
  } | null>(null);

  // Handle submit form data
  const onSubmit: SubmitHandler<PetForm> = async data => {
    setIsLoading(true);
    try {
      const imageUrl = await uploadImage(data.image);

      if (!imageUrl) {
        setIsLoading(false);
        return;
      }

      const transformedData = getTransformedData(data, imageUrl);

      await addPet.mutateAsync(transformedData);

      // If response is successful, go to the final confirmation step after form submit
      setToast({
        message: 'Pet has been added successfully',
        type: 'success',
      });
      reset();
      onClose();
    } catch (error) {
      setToast({
        message: 'Something went wrong. Please, try again later',
        type: 'error',
      });
    }

    setIsLoading(false);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        gap={{ xs: 2, md: 2.5 }}
        display="flex"
        flexDirection="column"
        mb={{ xs: 3, md: 2 }}
        maxWidth={700}
        mx="auto"
      >
        <Box
          display="flex"
          gap={{ xs: 2, md: 3 }}
          flexDirection={{ xs: 'column', md: 'row' }}
        >
          <Field
            name="name"
            control={control}
            placeholder="Your pet name"
            label="Name"
          />
          <Field
            name="breed"
            control={control}
            placeholder="Your pet breed"
            label="Breed"
          />
        </Box>

        <DatePickerField
          name="dateOfBirth"
          label="Date of birth"
          control={control}
          placeholder="Your pet date of birth"
        />

        <FileUploadField methods={methods} />

        <TextArea
          name="comments"
          control={control}
          placeholder="Text your comments here..."
        />

        <Box
          width="100%"
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          gap={{ xs: 2, md: 5 }}
          mt={5}
        >
          <Button
            variant="outlined"
            type="button"
            size="large"
            fullWidth
            sx={{
              color: 'text.primary',
              borderColor: (theme: Theme) => theme.palette.grey[200],
            }}
            onClick={onClose}
          >
            Cancel
          </Button>

          <LoadingButton
            loading={isLoading}
            variant="contained"
            type="submit"
            size="large"
            loadingPosition="start"
            startIcon={<></>}
            fullWidth
          >
            Submit
          </LoadingButton>
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

export default AddPetForm;
