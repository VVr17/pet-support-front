import { CloudUpload } from '@mui/icons-material';
import {
  AlertColor,
  Avatar,
  Box,
  TextField,
  TextFieldProps,
} from '@mui/material';
import { ChangeEvent, createRef, useState } from 'react';
import { Cropper, ReactCropperElement } from 'react-cropper';
import { dataURItoFile } from '@/helpers/dataURItoFile';
import { Controller, UseFormReturn } from 'react-hook-form';

import { avatarStyles, cropperStyles, newImagePreviewStyles } from './styles';
import Toast from '@/components/ui-kit/Toast';

interface IFileInputProps extends Omit<TextFieldProps, 'name'> {
  methods: UseFormReturn<NoticeForm, unknown, undefined>;
}

const FileUploadField: React.FC<IFileInputProps> = ({ methods }) => {
  const { control, setValue } = methods;
  // const { control, handleSubmit, setValue } = useForm<FormValues>({
  //   defaultValues: { avatar: null },
  // });
  // const updateUser = useUpdateUser();
  // const { data: user, refetch } = useUser();

  const [image, setImage] = useState<string>('');
  const [cropData, setCropData] = useState<string>('');
  // const [isUploading, setIsUploading] = useState(false);

  const [toast, setToast] = useState<{
    message: string;
    type: AlertColor;
  } | null>(null);

  const cropperRef = createRef<ReactCropperElement>();

  // Checks whether there is a file and sets image to be cropped
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let files: FileList | null = e.target.files;

    if (!files || files.length === 0) {
      setToast({ message: 'No file selected', type: 'error' });
      return;
    }

    const file = files[0];
    if (!['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
      setToast({ message: 'Invalid file type', type: 'error' });
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Crops image according to specified dimensions
  const handleCrop = () => {
    if (cropperRef.current?.cropper) {
      const canvas = cropperRef.current.cropper.getCroppedCanvas({
        width: 200,
        height: 200,
      });
      if (canvas) {
        const croppedImage = canvas.toDataURL();
        setCropData(croppedImage);

        const file = dataURItoFile(croppedImage, 'image.jpg');
        setValue('image', file);
      }
    }
  };

  return (
    <>
      <Box
        gap={{ xs: 2, md: 2.5 }}
        display="flex"
        flexDirection="column"
        mb={{ xs: 3, md: 5 }}
      >
        <Box position="relative" width={80} height={80}>
          <Avatar sx={avatarStyles} component="label">
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  value=""
                  onChange={handleInputChange}
                  id="image"
                  type="file"
                  sx={{ display: 'none' }}
                />
              )}
            />

            <CloudUpload fontSize={'large'} />
          </Avatar>

          <Box sx={cropperStyles}>
            <Cropper
              ref={cropperRef}
              initialAspectRatio={1}
              preview=".img-preview"
              src={image}
              viewMode={1}
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false}
              guides={true}
              crop={handleCrop}
            />
          </Box>

          <Box
            sx={{
              ...newImagePreviewStyles,
              opacity: cropData && image ? 1 : 0,
            }}
          >
            <Avatar sx={{ width: 80, height: 80 }} src={cropData}></Avatar>
          </Box>
        </Box>

        {/* {image && (
        <Box display="flex" gap={2} height="fit-content">
          <Button
            variant="outlined"
            size="large"
            fullWidth
            onClick={removeImagePreview}
          >
            Remove
          </Button>
        </Box>
      )} */}
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

export default FileUploadField;
