/* eslint-disable @typescript-eslint/no-explicit-any */
interface NoticeForm {
  // First step
  title: string;
  name: string;
  breed: string;
  dateOfBirth: Dayjs;

  // Second step
  gender: GenderType;
  categoryId: string;
  speciesId: string;
  price: number | null;

  // Third step
  image: any;

  // Fourth step
  location: string;
  comments: string;
}

interface INoticeData {
  title: string;
  name: string;
  photoURL: string;
  breed: string;
  gender: string;
  dateOfBirth: string;
  location: string;
  comments: string;
  price: number | null;
  categoryId: string;
  speciesId: string;
}
