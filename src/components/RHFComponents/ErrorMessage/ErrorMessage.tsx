import { FormHelperText } from '@mui/material';
import React from 'react';

import { errorStyles } from './styles';

interface IProps {
  message: string;
}

const ErrorMessage: React.FC<IProps> = ({ message }) => {
  return <FormHelperText sx={errorStyles}>{message}</FormHelperText>;
};

export default ErrorMessage;
