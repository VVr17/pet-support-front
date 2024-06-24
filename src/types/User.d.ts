interface AuthUser {
  id: string;
  email: string;
  fullName: string;
  isAdmin: boolean;
}

interface User extends AuthUser {
  birthday: string | null;
  location: string | null;
  phone: string | null;
  photoURL: string | null;
}

interface LoginResponse {
  access_token: string;
  data: User;
}
