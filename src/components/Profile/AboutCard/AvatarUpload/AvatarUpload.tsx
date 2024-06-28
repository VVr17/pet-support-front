import { CloudUpload } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { AlertColor, Avatar, Box, Button, TextField } from '@mui/material';
import { ChangeEvent, createRef, useState } from 'react';
import { Cropper, ReactCropperElement } from 'react-cropper';

import { uploadFile } from '@/api/files';
import { dataURItoFile } from '@/helpers/dataURItoFile';
import { useUpdateUser, useUser } from '@/hooks/useQuery/useUser';

import Toast from '../../../ui-kit/Toast';
import { avatarStyles, cropperStyles, newImagePreviewStyles } from './styles';

const AvatarUpload = () => {
  const updateUser = useUpdateUser();
  const { data: user, refetch } = useUser();

  const [image, setImage] = useState<string>('');
  const [cropData, setCropData] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);

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
    if (!['image.png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
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
      }
    }
  };

  // Uploads image file to storage
  const uploadImage = async () => {
    setIsUploading(true);
    const formData = new FormData();
    const file = dataURItoFile(cropData, 'avatar.jpg');
    formData.append('file', file);

    try {
      const response = await uploadFile(formData);

      if (response.url) {
        await updateUserData(response.url);
        setCropData('');
        setImage('');

        setToast({
          message: 'Avatar updated successfully',
          type: 'success',
        });
      }
    } catch (error) {
      setToast({
        message: 'Something went wrong. Please, try again later',
        type: 'error',
      });
    }
    setIsUploading(false);
  };

  // Updates user data to set new avatar url
  const updateUserData = async (url: string) => {
    await updateUser.mutateAsync({ photoURL: url });
    refetch();
  };

  // Removes image preview
  const removeImagePreview = () => {
    setCropData('');
    setImage('');
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
            {/* Hidden input File */}
            <TextField
              onChange={handleInputChange}
              id="image"
              type="file"
              sx={{ display: 'none' }}
            />

            {user?.photoURL ? (
              // User current avatar
              <img
                src={user.photoURL}
                alt="user avatar"
                width={80}
                height={80}
              />
            ) : (
              // Upload file Fallback
              <CloudUpload fontSize={'large'} />
            )}
          </Avatar>

          {/* Cropper */}
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

          {/* New image preview */}
          <Box
            sx={{
              ...newImagePreviewStyles,
              opacity: cropData && image ? 1 : 0,
            }}
          >
            <Avatar sx={{ width: 80, height: 80 }} src={cropData}></Avatar>
          </Box>
        </Box>

        {image && (
          <Box display="flex" gap={2} height="fit-content">
            <LoadingButton
              loading={isUploading || updateUser.isPending}
              variant="contained"
              type="submit"
              size="large"
              loadingPosition="start"
              fullWidth
              startIcon={<></>}
              onClick={uploadImage}
            >
              Upload
            </LoadingButton>
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

export default AvatarUpload;
