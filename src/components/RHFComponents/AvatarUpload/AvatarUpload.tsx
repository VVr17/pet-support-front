/* eslint-disable @typescript-eslint/no-explicit-any */
import { CloudUpload } from "@mui/icons-material";
import { Avatar, FormControl, IconButton, Typography } from "@mui/material";
import React from "react";
import { Control, Controller } from "react-hook-form";

import ErrorMessage from "../ErrorMessage";

interface FileUploadProps {
  control: Control<any>;
  name: string;
  label: string;
}

const AvatarUpload: React.FC<FileUploadProps> = ({ control, name, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl
          component="label"
          error={!!fieldState.error}
          sx={{ position: "relative", width: "100%" }}
        >
          <input {...field} type="file" id={name} style={{ display: "none" }} />
          <Avatar
            sx={{ width: 40, height: 40, marginRight: 1 }}
            variant="rounded"
          >
            <IconButton
              component="label"
              htmlFor={name}
              aria-label="upload file"
              size="small"
              sx={{ width: 40, height: 40 }}
            >
              <CloudUpload />
            </IconButton>
          </Avatar>
          <Typography variant="body1">{label}</Typography>
          {fieldState.error?.message && (
            <ErrorMessage message={fieldState.error.message} />
          )}
        </FormControl>
      )}
    />
  );
};

export default AvatarUpload;
