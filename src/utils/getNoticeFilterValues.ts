import { defaultPriceRange } from './constants/notices';

export const getNoticeFilterValues = (
  search: SearchQuery,
  species: Species[] | undefined,
) => {
  const speciesSlugs = (search.species
    ? search.species
    : []) as unknown as string[];

  return {
    sex: search.sex as unknown as GenderType[],
    priceMin:
      search.priceMin && +search.priceMin !== defaultPriceRange.minPrice
        ? +search.priceMin
        : null,
    priceMax:
      search.priceMax && +search.priceMax !== defaultPriceRange.maxPrice
        ? +search.priceMax
        : null,
    speciesIds: speciesSlugs
      .map(item => species?.find(species => species.slug === item)?.id)
      .filter((item): item is string => !!item),
    sort: search.sort as unknown as string,
    sortType: search.sortType as unknown as SortType,
  };
};
