interface AuthUser {
  id: string;
  email: string;
  name: string;
  isAdmin: boolean;
}

interface User extends AuthUser {
  birthday: string | null;
  city: string | null;
  phone: string | null;
  photoURL: string | null;
}
