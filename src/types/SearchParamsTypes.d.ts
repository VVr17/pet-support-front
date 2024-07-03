type ParamsType =
  | 'category'
  | 'species'
  | 'priceMin'
  | 'priceMax'
  | 'gender'
  | 'search'
  | 'sort'
  | 'sortType'
  | 'page'
  | 'limit';

interface Sort {
  sort: string;
  sortType: SortType;
}

interface NoticeFilter {
  gender: GenderType[];
  species: string[];
  priceMin: number | null;
  priceMax: number | null;
}

interface SearchQuery {
  page: number;
  [key: string]: string | number | string[];
}

/* eslint-disable @typescript-eslint/no-explicit-any */
interface SearchParams {
  searchParams: URLSearchParams;
  searchType: 'pagination' | 'filter' | 'category' | 'sort';
  dataToUpdate?: any;
  page?: number;
  category?: string;
}

interface NoticeRequestParams {
  category: string | null;
  page: number;
  limit: number;
  sort: string;
  sortType: SortType;
  gender?: GenderType[];
  species?: string[];
  priceMin?: number | null;
  priceMax?: number | null;
}

interface UseNoticeRequestParams {
  category: string | undefined | null;
  page?: number;
  limit?: number;
  sort: string;
  sortType: SortType;
  gender?: GenderType[];
  species?: string[];
  priceMin?: number | null;
  priceMax?: number | null;
}
