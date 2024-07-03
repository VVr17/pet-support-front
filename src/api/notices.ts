import { api } from './config';

/**
 * Fetches notices from the server based on the given parameters.
 *
 * @param params.category - The ID of the category to fetch notices for.
 * @param params.page - The page number to fetch.
 * @param params.limit - The number of notices per page.
 * @param params.sort - The sorting parameter.
 * @param params.sortType - The sorting order, either 'ASC' or 'DESC'.
 * @param params.gender - An optional array of gender filters ('male' or 'female').
 * @param params.species - An optional array of species filters.
 * @param params.priceMin - An optional minimum price filter.
 * @param params.priceMax - An optional maximum price filter.
 * @returns A promise that resolves to the response containing the notices.
 */
export const fetchNotices = async (
  params: NoticeRequestParams,
): Promise<NoticesResponse> => {
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
