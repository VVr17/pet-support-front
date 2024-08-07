interface Owner {
  email: string;
  phone: string;
}

interface Notice {
  id: string;
  title: string;
  photoURL: string;
  name: string;
  breed: string;
  gender: string;
  dateOfBirth: string;
  location: string;
  comments: string;
  price: number;
  category: Category;
  species: Species;
  Owner: Owner;
}

interface NoticesResponse {
  message: string;
  total: number;
  data: Notice[];
}
