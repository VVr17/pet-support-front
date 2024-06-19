import { Box, Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

import Field from "@/components/RHFComponents/Field";

import { formConfig } from "./utils/formConfig";

const LoginForm = () => {
  // Form control using React Hook Form
  const { handleSubmit, control, reset } = useForm<ILoginForm>(formConfig);

  // Handle submit form data
  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log("log in form submit ", data);
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      gap={{ xs: 2, md: 2.5 }}
      display="flex"
      flexDirection="column"
      mb={{ xs: 3, md: 2 }}
    >
      <Field name="email" control={control} placeholder="Your email" />
      <Field name="password" control={control} placeholder="Password" />

      <Box
        sx={{
          "& .MuiCheckbox-root": {
            py: 0,
          },
          "& .MuiFormControlLabel-root": {
            pb: { xs: 1, md: 0.5 },
          },
        }}
      ></Box>
      <Button variant="contained" type="submit">
        Log in
      </Button>
    </Box>
  );
};

export default LoginForm;
