import axios from 'axios';

export const BASE_URL = 'https://petly-support.up.railway.app/api';

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: BASE_URL,
});

// Define an object to manage the authorization header
const authHeader = {
  /**
   * Sets the authorization token in the Axios headers.
   *
   * @param token - The token to be set in the authorization header.
   */
  setAuthToken(token: string) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  /**
   * Deletes the authorization token from the Axios headers.
   */
  deleteAuthToken() {
    api.defaults.headers.common.Authorization = '';
  },
};

export { api, authHeader };
