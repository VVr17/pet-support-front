type QueryFieldName =
  | 'category'
  | 'species'
  | 'priceMin'
  | 'priceMax'
  | 'sex'
  | 'search'
  | 'sort'
  | 'sortType';

interface Sort {
  sort: string;
  sortType: SortType;
}

interface NoticeFilter {
  sex: GenderType[];
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
  categoryId: string | null;
  page: number;
  limit: number;
  sort: string;
  sortType: SortType;
  sex?: GenderType[];
  species?: string[];
  priceMin?: number | null;
  priceMax?: number | null;
}

interface UseNoticeRequestParams {
  categoryId: string | undefined | null;
  page?: number;
  limit?: number;
  sort: string;
  sortType: SortType;
  sex?: GenderType[];
  species?: string[];
  priceMin?: number | null;
  priceMax?: number | null;
}
