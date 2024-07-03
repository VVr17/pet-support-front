import { PARAMS } from './params';

export const FIRST_PAGE = 1;
export const DEFAULT_PER_PAGE = 10;
export const LIMIT_PER_PAGE = 8;
export const MAX_SHOWN_NOTICES = 8;

export const numericQueryFields = [PARAMS.priceMin, PARAMS.priceMax];
export const sortQueryFields = [PARAMS.sort, PARAMS.sortType];
export const filterQueryFields = [PARAMS.species, PARAMS.gender];

export const defaultPriceRange = {
  minPrice: 0,
  maxPrice: 2000,
};

export const defaultSort: Sort = {
  sort: 'createdAt',
  sortType: 'DESC',
};

export const defaultFilter: NoticeFilter = {
  gender: [],
  species: [],
  priceMin: null,
  priceMax: null,
};
