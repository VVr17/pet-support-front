import { LoadingButton } from "@mui/lab";
import { Box, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Field from "@/components/RHFComponents/Field";
import { useUser } from "@/hooks/useQuery/useUser";

import { formConfig } from "./formConfig";

const ContactsForm = () => {
  const { data: user } = useUser();

  // Form control using React Hook Form
  const { handleSubmit, control, reset } = useForm<ContactsForm>(formConfig);

  // Handle submit form data
  const onSubmit: SubmitHandler<ContactsForm> = async (data) => {
    console.log("data", data);
  };

  useEffect(() => {
    if (user) {
      reset({
        email: user.email,
        phone: user.phone || "",
        city: user.city || "",
      });
    }
  }, [reset, user]);

  return (
    <>
      <Paper
        sx={{
          height: { md: "100%" },
          mx: "auto",
          p: { xs: 2, md: 3 },
          display: "flex",
          flexDirection: "column",
          maxWidth: 700,
        }}
      >
        <Typography variant="h4" mb={4}>
          Contacts
        </Typography>

        {/* //TODO: for development */}
        {/* <Typography>Email: {user.email}</Typography>
        <Typography>Phone: {user.phone}</Typography>
        <Typography>Address: {user.city}</Typography> */}
        {user && (
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            gap={{ xs: 2, md: 2.5 }}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            sx={{ flexGrow: 1 }}
          >
            <Box gap={{ xs: 2, md: 2.5 }} display="flex" flexDirection="column">
              <Field name="email" control={control} placeholder="Your email" />
              <Field name="phone" control={control} placeholder="Your phone" />
              <Field name="city" control={control} placeholder="Your address" />
            </Box>

            <LoadingButton
              // loading={isLoading}
              variant="contained"
              type="submit"
              size="large"
              loadingPosition="start"
              startIcon={<></>}
              sx={{
                mt: 5,
                "& .MuiLoadingButton-loadingIndicator": {
                  left: "42%",
                },
              }}
            >
              Save changes
            </LoadingButton>
          </Box>
        )}
      </Paper>
    </>
  );
};

export default ContactsForm;
