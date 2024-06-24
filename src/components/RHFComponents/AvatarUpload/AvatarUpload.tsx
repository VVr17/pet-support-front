/* eslint-disable @typescript-eslint/no-explicit-any */
import { CloudUpload } from '@mui/icons-material';
import { Avatar, FormControl, IconButton, TextField } from '@mui/material';
import React from 'react';
import { Control, Controller } from 'react-hook-form';

import ErrorMessage from '../ErrorMessage';

interface FileUploadProps {
  control: Control<any>;
  name: string;
}

const AvatarUpload: React.FC<FileUploadProps> = ({ control, name }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl
          component="label"
          error={!!fieldState.error}
          sx={{ position: 'relative', width: '100%' }}
        >
          <TextField
            {...field}
            type="file"
            id={name}
            style={{ display: 'none' }}
          />
          <Avatar sx={{ width: 80, height: 80, marginRight: 1 }}>
            <IconButton
              component="label"
              htmlFor={name}
              aria-label="upload file"
              size="small"
              sx={{ width: 80, height: 80 }}
            >
              <CloudUpload fontSize={'large'} />
            </IconButton>
          </Avatar>
          {fieldState.error?.message && (
            <ErrorMessage message={fieldState.error.message} />
          )}
        </FormControl>
      )}
    />
  );
};

export default AvatarUpload;
