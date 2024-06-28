import dayjs from 'dayjs';

/**
 * Transforms pet form data by restructuring and converting certain fields.
 *
 * @param data - The pet form data to be transformed.
 * @param imageUrl - The URL of the image to be included in the transformed data.
 * @returns The transformed pet data.
 */
export const getTransformedData = (data: PetForm, imageUrl: string) => {
  const { image, dateOfBirth, ...rest } = data;

  const transformedNoticeData: IPetData = {
    ...rest,
    photoURL: imageUrl,
    dateOfBirth: dayjs(dateOfBirth).toISOString(),
  };

  return transformedNoticeData;
};
