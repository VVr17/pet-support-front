interface PetForm {
  name: string;
  breed: string;
  dateOfBirth: Dayjs;
  image: any;
  comments: string;
}

interface IPetData {
  name: string;
  photoURL: string;
  breed: string;
  dateOfBirth: string;
  comments: string;
}
