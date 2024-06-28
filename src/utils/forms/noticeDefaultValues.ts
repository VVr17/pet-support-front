import dayjs from 'dayjs';

export const noticeDefaultValues = {
  // First step
  title: '',
  name: '',
  breed: '',
  dateOfBirth: dayjs(Date.now()),
  location: '',

  // Second step
  sex: 0 as Sex,
  categoryId: '',
  price: 0,

  // Third step
  image: '',

  // Fourth step
  comments: '',
};
