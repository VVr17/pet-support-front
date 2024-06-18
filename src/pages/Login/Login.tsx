import { Button, Typography } from "@mui/material";

import { api, authHeader } from "@/api/config";
import Section from "@/components/Section";
import { useUserStore } from "@/store/useUserStore";

const Login = () => {
  const { setUser, setToken } = useUserStore();

  const logIn = async () => {
    try {
      const response = await api.post("/auth/login", {
        email: "********",
        password: "*******",
      });

      const token = response.data.access_token as string;
      const user = response.data.data as User;

      setToken(token);
      setUser(user);

      // Set token in axios headers
      authHeader.setAuthToken(token);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Section>
      <Typography variant="h1">Log in</Typography>
      <Button variant="contained" onClick={logIn}>
        Log in
      </Button>
    </Section>
  );
};

export default Login;
