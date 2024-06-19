import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

export const TextareaAutosize = styled(BaseTextareaAutosize)(
  ({ theme }) => `
    padding: 12px;
    border-color: #e5e5e5;
    font-weight: 500;
    font-family: "Mulish",sans-serif;
    line-height: 1.5;
    resize: none;
    border-radius: 8px;
    font-size: inherit;

    &::placeholder {
      color: ${theme.palette.grey[400]};
    }

    &:hover {
      border-color: ${theme.palette.text.primary};
    }

    &:focus {
      border-color: ${theme.palette.primary.main};
      outline: none; /* Remove default outline */
      box-shadow: 0 0 0 0.075rem ${theme.palette.primary.main}; /* Add custom focus outline */
    }
  `,
);
