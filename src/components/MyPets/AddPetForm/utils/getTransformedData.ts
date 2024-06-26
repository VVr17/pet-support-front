import dayjs from 'dayjs';

export const getTransformedData = (data: PetForm, imageUrl: string) => {
  const { image, dateOfBirth, ...rest } = data;

  const transformedNoticeData: IPetData = {
    ...rest,
    photoURL: imageUrl,
    dateOfBirth: dayjs(dateOfBirth).toISOString(),
  };

  return transformedNoticeData;
};
