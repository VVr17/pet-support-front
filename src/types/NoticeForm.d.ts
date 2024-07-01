/* eslint-disable @typescript-eslint/no-explicit-any */
interface NoticeForm {
  // First step
  title: string;
  name: string;
  breed: string;
  dateOfBirth: Dayjs;

  // Second step
  sex: Sex;
  categoryId: string;
  speciesId: string;
  price: number | null;

  // Third step
  image: any;

  // Fourth step
  location: string;
  comments: string;
}

type Sex = 0 | 1 | 'male' | 'female';

interface INoticeData {
  title: string;
  name: string;
  photoURL: string;
  breed: string;
  sex: string;
  dateOfBirth: string;
  location: string;
  comments: string;
  price: number | null;
  categoryId: string;
  speciesId: string;
}
