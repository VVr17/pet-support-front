/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  defaultPriceRange,
  defaultSort,
  filterQueryFields,
  sortQueryFields,
} from '@/utils/constants/notices';
import { PARAMS } from '@/utils/constants/params';

/**
 * Update search parameters based on the provided search type, data to update and page number.
 *
 * @param searchParams - An instance of URLSearchParams containing the current search parameters.
 * @param searchType - A string indicating the type of search ('pagination' or 'filter').
 * @param dataToUpdate - An object containing data from filter to update in the search parameters .
 * @param page - The page number to update in the search parameters.
 * @param category - The category to update in the search parameters.
 *
 * @returns A string representing the updated URL query based on the input parameters.
 */
export const updateSearchParams = ({
  searchParams,
  searchType,
  dataToUpdate,
  page,
  category,
}: SearchParams) => {
  // Create an array from the current search parameters.
  const currentSearchParams = new URLSearchParams(
    Array.from(searchParams.entries()),
  );

  // Update or remove the 'page' parameter based on the search type.
  if (searchType === 'pagination' && page) {
    updateStringParam(currentSearchParams, PARAMS.page, page.toString()); // Update page
  } else {
    currentSearchParams.delete(PARAMS.page); // Drop the page param if filter params have been changed
  }

  // Update sort params
  if (searchType === 'sort' && dataToUpdate) {
    sortQueryFields.forEach(fieldName => {
      updateStringParam(
        currentSearchParams,
        fieldName,
        dataToUpdate[fieldName],
      );
    });
  } else if (searchType === 'filter' || searchType === 'category') {
    const dataToUpdate = defaultSort as any;

    // Set default sort on filter / category change
    sortQueryFields.forEach(fieldName => {
      updateStringParam(
        currentSearchParams,
        fieldName,
        dataToUpdate[fieldName],
      );
    });
  }

  // Update category
  if (searchType === 'category' && category) {
    updateStringParam(currentSearchParams, PARAMS.category, category);

    // If category is not "Sell" remove price search params
    if (category !== 'sell') {
      currentSearchParams.delete(PARAMS.priceMin);
      currentSearchParams.delete(PARAMS.priceMax);
    }
  }

  // Update filter-related parameters based on the data to update from the filter form submit.
  if (searchType === 'filter' && dataToUpdate) {
    filterQueryFields.forEach(fieldName => {
      updateArrayParam(currentSearchParams, fieldName, dataToUpdate[fieldName]);
    });

    if (dataToUpdate.priceMin !== defaultPriceRange.minPrice) {
      updateStringParam(
        currentSearchParams,
        PARAMS.priceMin,
        dataToUpdate.priceMin,
      );
    }

    if (dataToUpdate.priceMax !== defaultPriceRange.maxPrice) {
      updateStringParam(
        currentSearchParams,
        PARAMS.priceMax,
        dataToUpdate.priceMax,
      );
    }
  }

  // Generate and return the updated URL query as a string.
  return getURLQuery(currentSearchParams);
};

/**
 * Update a string parameter in a URLSearchParams object.
 *
 * @param searchParams - An instance of URLSearchParams to update.
 * @param paramName - The name of the parameter to update.
 * @param value - The new value for the parameter.
 */
export const updateStringParam = (
  searchParams: URLSearchParams,
  paramName: string,
  value: string,
) => {
  searchParams.delete(paramName);

  if (value) {
    searchParams.append(paramName, value);
  }
};

/**
 * Update an array parameter in a URLSearchParams object.
 * Remove parament or append the new parameter values if the array of new values is not empty.
 *
 * @param searchParams - An instance of URLSearchParams to update.
 * @param paramName - The name of the parameter to update.
 * @param values - An array of new values for the parameter.
 */
export const updateArrayParam = (
  searchParams: URLSearchParams,
  paramName: string,
  values: string[],
) => {
  searchParams.delete(paramName);

  if (values.length) {
    values.forEach(value => {
      searchParams.append(paramName, value);
    });
  }
};

/**
 * Create and return new URL query string according to the given search params
 */
export const getURLQuery = (currentSearchParams: URLSearchParams): string => {
  const search = currentSearchParams.toString();
  return search ? `?${search}` : '';
};
