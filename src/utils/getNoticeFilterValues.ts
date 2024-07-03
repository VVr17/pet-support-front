import { defaultPriceRange } from './constants/notices';

/**
 * Extracts and formats filter values from the search query for notices.
 *
 * @param search - The search query object containing filter parameters.
 * @param species - An optional array of species objects to map species slugs to IDs.
 * @returns An object containing formatted filter values for notices.
 */
export const getNoticeFilterValues = (
  search: SearchQuery,
  species: Species[] | undefined,
) => {
  // Convert species slugs from the search query to an array of strings
  const speciesSlugs: string[] = Array.isArray(search.species)
    ? search.species
    : [];

  return {
    gender: search.gender as GenderType[],

    // Convert priceMin to a number if it differs from the default min price, otherwise null
    priceMin:
      search.priceMin && +search.priceMin !== defaultPriceRange.minPrice
        ? +search.priceMin
        : null,

    // Convert priceMax to a number if it differs from the default max price, otherwise null
    priceMax:
      search.priceMax && +search.priceMax !== defaultPriceRange.maxPrice
        ? +search.priceMax
        : null,

    // Map species slugs to their corresponding IDs
    speciesIds: speciesSlugs
      .map(slug => species?.find(species => species.slug === slug)?.id)
      .filter((id): id is string => !!id),

    // Extract sort and sort Type parameters
    sort: search.sort as string,
    sortType: search.sortType as SortType,
  };
};
