import { api, authHeader } from './config';

/**
 * Logs in a user with the provided credentials.
 *
 * @param credentials - The login credentials.
 * @returns A promise that resolves to the login response.
 */
export const logIn = async (credentials: AuthForm): Promise<LoginResponse> => {
  const requestURL = '/auth/login';

  const response = await api.post(requestURL, credentials);

  // Set token in axios headers
  authHeader.setAuthToken(response.data.access_token);

  return response.data;
};

/**
 * Signs up a new user with the provided credentials.
 *
 * @param credentials - The signup credentials.
 * @returns A promise that resolves to the signup response.
 */
export const signUp = async (credentials: AuthForm): Promise<LoginResponse> => {
  const requestURL = '/auth/signUp';

  const response = await api.post(requestURL, credentials);

  // If the signup is successful, log in the user automatically
  if (response.data) {
    await logIn(credentials);
  }

  return response.data;
};
