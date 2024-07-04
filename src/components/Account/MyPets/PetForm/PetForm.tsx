import { LoadingButton } from '@mui/lab';
import { AlertColor, Box, Button, Theme } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import DatePickerField from '@/components/RHFComponents/DatePickerField';
import Field from '@/components/RHFComponents/Field';
import FileUploadField from '@/components/RHFComponents/FileUploadField';
import TextArea from '@/components/RHFComponents/TextArea';
import Loader from '@/components/ui-kit/Loader';
import Toast from '@/components/ui-kit/Toast';
import { uploadImage } from '@/helpers/uploadImage';
import {
  useAddPet,
  usePetDetails,
  useUpdatePet,
} from '@/hooks/useQuery/usePets';
import { ToastType } from '@/types/Toast';

import { getFormConfig } from './utils/formConfig';
import { getDefaultValuesByPet } from './utils/getDefaultValuesByPet';
import { getTransformedData } from './utils/getTransformedData';

interface IPetFormProps {
  onClose: () => void;
  petId?: string;
  setToast?: Dispatch<SetStateAction<ToastType | null>>;
}

const PetForm: React.FC<IPetFormProps> = ({ onClose, petId }) => {
  const { data: pet, isLoading: petIsLoading } = usePetDetails(
    petId ? petId : null,
  );

  // Form control using React Hook Form
  const methods = useForm<PetForm>(getFormConfig(petId));
  const {
    handleSubmit,
    control,
    reset,
    formState: { isDirty },
  } = methods;

  const addPet = useAddPet();
  const updatePet = useUpdatePet();
  const [isLoading, setIsLoading] = useState(false);

  const [toast, setToast] = useState<{
    message: string;
    type: AlertColor;
  } | null>(null);

  useEffect(() => {
    if (pet) {
      const petFormData = getDefaultValuesByPet(pet);
      reset(petFormData);
    }
  }, [pet, reset]);

  // Handle submit form data
  const onSubmit: SubmitHandler<PetForm> = async data => {
    setIsLoading(true);
    try {
      let imageUrl = pet?.photoURL; // Initial image Url

      if (data.image) {
        imageUrl = await uploadImage(data.image);
      }

      if (!imageUrl) {
        setIsLoading(false);
        setToast({
          message:
            'Something went wrong during image upload. Please, try again later',
          type: 'error',
        });
        return;
      }

      const transformedData = getTransformedData(data, imageUrl);

      // If there is pet, update its data, otherwise create new pet
      if (pet?.id) {
        await updatePet.mutateAsync({
          petId: pet.id,
          petData: transformedData,
        });

        setToast({
          message: 'Pet has been updated successfully',
          type: 'success',
        });
      } else {
        await addPet.mutateAsync(transformedData);
        setToast({
          message: 'Pet has been added successfully',
          type: 'success',
        });
      }

      if (!pet?.id) {
        reset();
      }
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
        />

        <FileUploadField methods={methods} fallback={pet?.photoURL} />

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
            onClick={() => {
              onClose();
              reset();
            }}
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
            disabled={!isDirty}
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

      <Loader open={petIsLoading} />
    </>
  );
};

export default PetForm;
