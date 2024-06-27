import { api, authHeader } from './config';

export const logIn = async (credentials: AuthForm): Promise<LoginResponse> => {
  const requestURL = '/auth/login';

  const response = await api.post(requestURL, credentials);

  // Set token in axios headers
  authHeader.setAuthToken(response.data.access_token);

  return response.data;
};

export const signUp = async (credentials: AuthForm): Promise<LoginResponse> => {
  const requestURL = '/auth/signUp';

  const response = await api.post(requestURL, credentials);

  if (response.data) {
    await logIn(credentials);
  }

  return response.data;
};
