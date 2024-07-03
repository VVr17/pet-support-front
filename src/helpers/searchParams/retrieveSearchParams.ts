import {
  defaultPriceRange,
  filterQueryFields,
  FIRST_PAGE,
} from '@/utils/constants/notices';
import { PARAMS } from '@/utils/constants/params';

/**
 * Retrieve search parameters from a URLSearchParams object and return an search query object.
 *
 * @param searchParams - A URLSearchParams object containing query parameters from the URL.
 * @returns - Object representing the search query parameters for filter form.
 */
export const retrieveSearchParams = (
  searchParams: URLSearchParams,
): SearchQuery => {
  const searchQuery: SearchQuery = {
    page: +(searchParams?.get(PARAMS.page) || FIRST_PAGE),
    category: searchParams.get(PARAMS.category) || '',
    priceMin: +(
      searchParams?.get(PARAMS.priceMin) || defaultPriceRange.minPrice
    ),
    priceMax: +(
      searchParams?.get(PARAMS.priceMax) || defaultPriceRange.maxPrice
    ),
    sort: searchParams.get(PARAMS.sort) || 'createdAt',
    sortType: (searchParams.get(PARAMS.sortType) || 'DESC') as SortType,
  };

  filterQueryFields.forEach(key => {
    searchQuery[key] = searchParams.getAll(key) || '';
  });

  return searchQuery;
};
