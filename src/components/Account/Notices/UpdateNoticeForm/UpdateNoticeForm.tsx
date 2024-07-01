import { LoadingButton } from '@mui/lab';
import { Box, Button, Grid, Theme } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import CustomRadioGroup from '@/components/RHFComponents/CustomRadioGroup';
import DatePickerField from '@/components/RHFComponents/DatePickerField';
import DropdownInput from '@/components/RHFComponents/DropdownInput';
import Field from '@/components/RHFComponents/Field';
import FileUploadField from '@/components/RHFComponents/FileUploadField';
import RangeField from '@/components/RHFComponents/RangeField';
import TextArea from '@/components/RHFComponents/TextArea';
import Loader from '@/components/ui-kit/Loader';
import { uploadImage } from '@/helpers/uploadImage';
import { useCategories } from '@/hooks/useQuery/useCategories';
import { useNoticeDetails, useUpdateNotice } from '@/hooks/useQuery/useNotices';
import { useSpecies } from '@/hooks/useQuery/useSpecies';
import useResponsive from '@/hooks/useResponsive';
import { ToastType } from '@/types/Toast';
import {
  getCategoriesOptions,
  getSpeciesOptions,
  sexOptions,
} from '@/utils/forms/selectOptions';

import FieldLabel from './FieldLabel';
import { getRadioGroupTestDriveStyles } from './styles';
import { formConfig } from './utils/formConfig';
import { getDefaultValuesByNotice } from './utils/getDefaultValuesByNotice';
import { getTransformedData } from './utils/getTransformedData';

interface INoticeFormProps {
  noticeId: string;
  setToast: Dispatch<SetStateAction<ToastType | null>>;
  onClose: () => void;
}

const UpdateNoticeForm: React.FC<INoticeFormProps> = ({
  onClose,
  noticeId,
  setToast,
}) => {
  const { data: notice, isLoading: noticeIsLoading } =
    useNoticeDetails(noticeId);
  const { data: categories } = useCategories();
  const categoryOptions = getCategoriesOptions(categories);

  const { data: species } = useSpecies();
  const speciesOptions = getSpeciesOptions(species);

  const [isLoading, setIsLoading] = useState(false);

  const updateNotice = useUpdateNotice();

  // Form control using React Hook Form
  const methods = useForm<NoticeForm>(formConfig);
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { isDirty },
  } = methods;

  const IsForSell =
    categories?.find(({ slug }) => slug === 'sell')?.id === watch('categoryId');

  const isMobile = useResponsive('down', 'sm');

  useEffect(() => {
    if (notice) {
      const noticeFormData = getDefaultValuesByNotice(notice);

      reset(noticeFormData);
    }
  }, [notice]);

  // Handle submit form data
  const onSubmit: SubmitHandler<NoticeForm> = async data => {
    if (!notice) return;

    setIsLoading(true);

    try {
      let imageUrl = notice.photoURL; // Initial image Url

      if (data.image) {
        imageUrl = await uploadImage(data.image);
      }

      const transformedData = getTransformedData(data, imageUrl);

      await updateNotice.mutateAsync({
        noticeId: notice.id,
        noticeData: transformedData,
      });

      setToast({
        message: 'Notice has been updated successfully',
        type: 'success',
      });

      reset();
    } catch (error) {
      setToast({
        message: 'Something went wrong. Please, try again later',
        type: 'error',
      });
      return null;
    }

    setIsLoading(false);
    onClose();
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
        <Field
          name="title"
          label="Title"
          control={control}
          placeholder="your notice title"
        />

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

        <Field
          name="location"
          control={control}
          placeholder="Current location"
          label="Location"
        />

        <Box sx={getRadioGroupTestDriveStyles(isMobile)}>
          <FieldLabel label="Choose sex" mb={0.5} />
          <CustomRadioGroup name="sex" control={control} options={sexOptions} />
        </Box>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
            <FieldLabel label="Select category" mb={1} />
            <DropdownInput
              name="categoryId"
              control={control}
              placeholder="Choose category"
              options={categoryOptions}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FieldLabel label="Select species" mb={1} />
            <DropdownInput
              name="speciesId"
              control={control}
              placeholder="Choose species"
              options={speciesOptions}
            />
          </Grid>
        </Grid>

        <Box display={IsForSell ? 'block' : 'none'}>
          <FieldLabel label="Price" mb={0.5} />
          <RangeField
            name="price"
            control={control}
            placeholder="Price"
            minRange={0}
            maxRange={2000}
            label="UAH"
          />
        </Box>

        <FileUploadField methods={methods} fallback={notice?.photoURL} />

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
            disabled={!isDirty}
          >
            Submit
          </LoadingButton>
        </Box>
      </Box>

      <Loader open={noticeIsLoading} />
    </>
  );
};

export default UpdateNoticeForm;
