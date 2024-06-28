import { api } from './config';

export const fetchNotices = async (
  categoryId: string,
  page: number,
  limit: number,
): Promise<NoticesResponse> => {
  const requestURL = `notices?category=${categoryId}&page=${page}&limit=${limit}`;

  const response = await api.get(requestURL);
  return response.data;
};

export const getNoticeById = async (noticeId: string): Promise<Notice> => {
  const requestURL = `/notices/${noticeId}`;

  const response = await api.get(requestURL);
  return response.data.data;
};

export const postNotice = async (noticeData: INoticeData) => {
  const requestURL = `/notices`;

  const response = await api.post(requestURL, noticeData);
  return response.data;
};

export const updateNotice = async (
  noticeId: string,
  noticeData: Partial<INoticeData>,
) => {
  const requestURL = `/notices/${noticeId}`;

  const response = await api.put(requestURL, noticeData);
  return response.data;
};

export const deleteNotice = async (noticeId: string) => {
  const requestURL = `/notices/${noticeId}`;

  const response = await api.delete(requestURL);
  return response.data;
};
