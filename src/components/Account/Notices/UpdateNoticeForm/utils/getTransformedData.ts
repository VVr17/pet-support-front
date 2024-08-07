/* eslint-disable @typescript-eslint/no-unused-vars */
import dayjs from 'dayjs';

/**
 * Transforms notice form data by restructuring and converting certain fields.
 *
 * @param data - The notice form data to be transformed.
 * @param imageUrl - The URL of the image to be included in the transformed data.
 * @returns The transformed notice data.
 */
export const getTransformedData = (data: NoticeForm, imageUrl: string) => {
  const { image, dateOfBirth, price, ...rest } = data;

  const transformedNoticeData: Partial<INoticeData> = {
    ...rest,
    photoURL: imageUrl,
    dateOfBirth: dayjs(dateOfBirth).toISOString(),
    price: price ? price : null,
  };

  return transformedNoticeData;
};
