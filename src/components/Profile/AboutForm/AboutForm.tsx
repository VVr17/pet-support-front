import { LoadingButton } from "@mui/lab";
import { Box, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Field from "@/components/RHFComponents/Field";
import { useUser } from "@/hooks/useQuery/useUser";

import { formConfig } from "./formConfig";

const AboutForm = () => {
  const { data: user } = useUser();

  // Form control using React Hook Form
  const { handleSubmit, control, reset } = useForm<AboutForm>(formConfig);

  // Handle submit form data
  const onSubmit: SubmitHandler<AboutForm> = async (data) => {
    console.log("data", data);
  };

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        birthday: user.birthday || "",
      });
    }
  }, [reset, user]);

  return (
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
        About
      </Typography>
      {user && (
        <>
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
              <Field name="name" control={control} placeholder="Your name" />
              <Field
                name="birthday"
                control={control}
                placeholder="Your birthday"
              />
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
        </>
      )}
    </Paper>
  );
};

export default AboutForm;
