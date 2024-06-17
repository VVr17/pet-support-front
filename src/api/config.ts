import axios from "axios";

export const BASE_URL = "https://petly-support.up.railway.app/api";

const api = axios.create({
  baseURL: BASE_URL,
});

const authHeader = {
  setAuthToken(token: string) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  deleteAuthToken() {
    api.defaults.headers.common.Authorization = "";
  },
};

export { api, authHeader };
