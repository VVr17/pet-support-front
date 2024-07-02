export const FIRST_PAGE = 1;
export const DEFAULT_PER_PAGE = 10;
export const LIMIT_PER_PAGE = 8;
export const MAX_SHOWN_NOTICES = 8;

export const numericQueryFields: QueryFieldName[] = ['priceMin', 'priceMax'];
export const sortQueryFields: QueryFieldName[] = ['sort', 'sortType'];
export const filterQueryFields: QueryFieldName[] = ['species', 'sex'];

export const defaultPriceRange = {
  minPrice: 0,
  maxPrice: 2000,
};

export const defaultSort: Sort = {
  sort: 'createdAt',
  sortType: 'DESC',
};

export const defaultFilter: NoticeFilter = {
  sex: [],
  species: [],
  priceMin: null,
  priceMax: null,
};
