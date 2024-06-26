import dayjs from 'dayjs';

export const getTransformedData = (data: NoticeForm, imageUrl: string) => {
  const { image, dateOfBirth, sex, price, ...rest } = data;

  const transformedNoticeData: INoticeData = {
    ...rest,
    photoURL: imageUrl,
    sex: sex === 0 ? 'male' : 'female',
    dateOfBirth: dayjs(dateOfBirth).toISOString(),
    price: price ? price : null,
  };

  return transformedNoticeData;
};
