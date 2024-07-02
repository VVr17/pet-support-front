import {
  defaultPriceRange,
  filterQueryFields,
  FIRST_PAGE,
} from '@/utils/constants/notices';

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
    page: +(searchParams?.get('page') || FIRST_PAGE),
    category: searchParams.get('category') || '',
    priceMin: +(searchParams?.get('priceMin') || defaultPriceRange.minPrice),
    priceMax: +(searchParams?.get('priceMax') || defaultPriceRange.maxPrice),
    sort: searchParams.get('sort') || 'createdAt',
    sortType: (searchParams.get('sortType') || 'DESC') as SortType,
  };

  filterQueryFields.forEach(key => {
    searchQuery[key] = searchParams.getAll(key) || '';
  });

  return searchQuery;
};
