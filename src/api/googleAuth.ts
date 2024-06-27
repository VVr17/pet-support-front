import axios from 'axios';
const GOOGLE_URL = 'https://www.googleapis.com/oauth2/v1/userinfo';

export const getUserData = async (googleToken: string) => {
  try {
    const response = await axios.get(
      `${GOOGLE_URL}?access_token=${googleToken}`,
      {
        headers: {
          Authorization: `Bearer ${googleToken}`,
          Accept: 'application/json',
        },
      },
    );
    const { email, name, picture } = response.data;
    return { user: { email, name, photoURL: picture }, error: null };
  } catch (error) {
    console.log('error', error);
    return { user: null, error };
  }
};
