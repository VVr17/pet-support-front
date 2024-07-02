import { api } from './config';

/**
 * Fetches notices from the server based on the given parameters.
 *
 * @param categoryId - The ID of the category to fetch notices for.
 * @param page - The page number to fetch.
 * @param limit - The number of notices per page.
 * @param sort - The sorting parameter.
 * @param sortType - The sorting order, either 'ASC' or 'DESC'.
 * @param sex - An optional array of sex filters ('male' or 'female').
 * @param species - An optional array of species filters.
 * @param priceMin - An optional minimum price filter.
 * @param priceMax - An optional maximum price filter.
 * @returns A promise that resolves to the response containing the notices.
 */
export const fetchNotices = async ({
  categoryId,
  page,
  limit,
  sort,
  sortType,
  sex,
  species,
  priceMin,
  priceMax,
}: NoticeRequestParams): Promise<NoticesResponse> => {
  const params: Record<string, string | number | string[]> = {
    category: categoryId as string,
    page,
    limit,
    sort,
    sortType,
  };

  // Add optional parameters only if they have values
  if (sex) {
    params.sex = sex;
  }
  if (species) {
    params.species = species;
  }
  if (priceMin) {
    params.priceMin = priceMin;
  }
  if (priceMax) {
    params.priceMax = priceMax;
  }

  const response = await api.get('notices', { params });
  return response.data;
};

/**
 * Fetches a specific notice by its ID.
 *
 * @param noticeId - The ID of the notice to fetch.
 * @returns A promise that resolves to the notice data.
 */
export const getNoticeById = async (noticeId: string): Promise<Notice> => {
  const requestURL = `/notices/${noticeId}`;

  const response = await api.get(requestURL);
  return response.data.data;
};

/**
 * Posts a new notice to the server.
 *
 * @param noticeData - The data of the notice to post.
 * @returns A promise that resolves to the response data of the posted notice.
 */
export const postNotice = async (noticeData: INoticeData) => {
  const requestURL = `/notices`;

  const response = await api.post(requestURL, noticeData);
  return response.data;
};

/**
 * Updates an existing notice with the given data.
 *
 * @param noticeId - The ID of the notice to update.
 * @param noticeData - The updated data for the notice.
 * @returns A promise that resolves to the response data of the updated notice.
 */
export const updateNotice = async (
  noticeId: string,
  noticeData: Partial<INoticeData>,
) => {
  const requestURL = `/notices/${noticeId}`;

  const response = await api.put(requestURL, noticeData);
  return response.data;
};

/**
 * Deletes a notice by its ID.
 *
 * @param noticeId - The ID of the notice to delete.
 * @returns A promise that resolves to the response data of the deleted notice.
 */
export const deleteNotice = async (noticeId: string) => {
  const requestURL = `/notices/${noticeId}`;

  const response = await api.delete(requestURL);
  return response.data;
};
