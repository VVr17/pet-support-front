/**
 * Extracts and formats filter values from the search query for notice filter form
 *
 * @param search Search params
 * @param species - An optional array of species objects to map species slugs to IDs.
 * @returns An object containing formatted values for filter form.
 */
export const getDefaultValuesByParams = (
  search: SearchQuery,
  species: Species[] | undefined,
) => {
  const gender = search.gender as GenderType[];
  const speciesSlugs: string[] = Array.isArray(search.species)
    ? search.species
    : [];
  const speciesData = speciesSlugs
    .map(slug => species?.find(species => species.slug === slug)?.id)
    .filter((id): id is string => !!id);

  return {
    gender,
    species: speciesData,
    price: [+search.priceMin, +search.priceMax],
  };
};
