import { Typography } from "@mui/material";

import LoginForm from "@/components/Auth/LoginForm";
import Section from "@/components/Section";

const Login = () => {
  // const { setUser, setToken } = useUserStore();

  // TODO: for development \ tests only
  // const logIn = async () => {
  //   try {
  //     const response = await api.post("/auth/login", {
  //       email: "vira_test@gmail.com",
  //       password: "Voronova1",
  //     });

  //     const token = response.data.access_token as string;
  //     const user = response.data.data as User;

  //     setToken(token);
  //     setUser(user);

  //     // Set token in axios headers
  //     authHeader.setAuthToken(token);
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //   }
  // };

  return (
    <Section>
      <Typography variant="h2" textAlign="center">
        Log in
      </Typography>
      {/* <Button variant="contained" onClick={logIn}>
        Log in
      </Button> */}
      <LoginForm />
    </Section>
  );
};

export default Login;
