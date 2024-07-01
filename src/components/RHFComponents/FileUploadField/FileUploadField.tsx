/* eslint-disable @typescript-eslint/no-explicit-any */
import { CloudUpload } from '@mui/icons-material';
import {
  AlertColor,
  Box,
  Button,
  CardMedia,
  TextField,
  TextFieldProps,
} from '@mui/material';
import { ChangeEvent, createRef, useState } from 'react';
import { Cropper, ReactCropperElement } from 'react-cropper';
import { Controller, UseFormReturn } from 'react-hook-form';

import Toast from '@/components/ui-kit/Toast';
import { dataURItoFile } from '@/helpers/dataURItoFile';
import useResponsive from '@/hooks/useResponsive';

import ErrorMessage from '../ErrorMessage';
import {
  cardMediaStyles,
  croppedImageStyles,
  cropperWrapperStyles,
  fallbackStyles,
  getCropperStyles,
  height,
} from './styles';

interface IFileInputProps extends Omit<TextFieldProps, 'name'> {
  methods: UseFormReturn<any, unknown, undefined>;
  fallback?: string;
}

const FileUploadField: React.FC<IFileInputProps> = ({ methods, fallback }) => {
  const isLargeMobile = useResponsive('between', 'sm', 'md');
  const isTablet = useResponsive('between', 'md', 'lg');
  const isDesktop = useResponsive('up', 'lg');

  const {
    control,
    setValue,
    trigger,
    formState: { errors },
  } = methods;

  const [image, setImage] = useState<string>('');
  const [cropData, setCropData] = useState<string>('');

  const [toast, setToast] = useState<{
    message: string;
    type: AlertColor;
  } | null>(null);

  const cropperRef = createRef<ReactCropperElement>();

  // Checks whether there is a file and sets image to be cropped
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;

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
  const handleCrop = async () => {
    const croppedImageDimensions = {
      width: 800,
      height: 800,
    };

    if (cropperRef.current?.cropper) {
      const canvas = cropperRef.current.cropper.getCroppedCanvas(
        croppedImageDimensions,
      );
      if (canvas) {
        const croppedImage = canvas.toDataURL();
        setCropData(croppedImage);

        const file = dataURItoFile(croppedImage, 'image.jpg');
        setValue('image', file, { shouldDirty: true });
        await trigger('image');
      }
    }
  };

  // Removes image preview
  const removeImagePreview = () => {
    setCropData('');
    setImage('');
    setValue('image', '');
  };

  return (
    <>
      <Box
        gap={{ xs: 2, md: 2.5 }}
        display="flex"
        flexDirection="column"
        mb={3}
      >
        <Box position="relative" width="100%" height={height}>
          <Box sx={fallbackStyles} component="label">
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

            {fallback ? (
              <Box sx={{ ...croppedImageStyles, opacity: 1 }}>
                <CardMedia
                  component="img"
                  src={fallback}
                  sx={cardMediaStyles}
                />
              </Box>
            ) : (
              <CloudUpload fontSize={'large'} />
            )}

            {errors?.image?.message && (
              <ErrorMessage message={errors.image.message as string} />
            )}
          </Box>

          <Box
            sx={{
              ...cropperWrapperStyles,
              opacity: !cropData && image ? 1 : 0,
              pointerEvents: !cropData && image ? 'auto' : 'none',
            }}
          >
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
              style={getCropperStyles(isDesktop, isTablet, isLargeMobile)}
            />
          </Box>

          <Box
            sx={{
              ...croppedImageStyles,
              opacity: cropData && image ? 1 : 0,
            }}
          >
            <CardMedia component="img" src={cropData} sx={cardMediaStyles} />
          </Box>
        </Box>

        {/* After image selected add buttons to crop or remove image */}
        {image && (
          <Box
            display="flex"
            gap={2}
            flexDirection={{ xs: 'column', sm: 'row' }}
            height="fit-content"
          >
            {!cropData && (
              <Button
                variant="outlined"
                size="large"
                fullWidth
                onClick={handleCrop}
              >
                Crop image
              </Button>
            )}

            <Button
              variant="outlined"
              size="large"
              fullWidth
              onClick={removeImagePreview}
            >
              Remove
            </Button>
          </Box>
        )}
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
