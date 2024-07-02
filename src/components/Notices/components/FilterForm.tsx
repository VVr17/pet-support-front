import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';

import CheckboxGroup from '@/components/RHFComponents/CheckboxGroup';
import DoubleRangeField from '@/components/RHFComponents/DoubleRange/DoubleRange';
import { retrieveSearchParams } from '@/helpers/searchParams/retrieveSearchParams';
import { updateSearchParams } from '@/helpers/searchParams/updateSearchParams';
import { useSpecies } from '@/hooks/useQuery/useSpecies';
import { defaultPriceRange } from '@/utils/constants/notices';
import { ROUTES } from '@/utils/constants/routes';
import { genderOptions, getSpeciesOptions } from '@/utils/forms/selectOptions';

import { formConfig } from './utils/formConfig';

interface IFilterFormProps {
  toggleDrawer: () => void;
}

const FilterForm: React.FC<IFilterFormProps> = ({ toggleDrawer }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Form control using React Hook Form
  const methods = useForm<NoticeFilterForm>(formConfig);
  const { handleSubmit, control, reset } = methods;

  const { data: species } = useSpecies();
  const speciesOptions = getSpeciesOptions(species);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Gets search params from URL and updates products according to search params
  useEffect(() => {
    const search = retrieveSearchParams(searchParams);

    setActiveCategory(search.category as string);

    const sex = search.sex as unknown as GenderType[];
    const speciesSlugs = (search.species
      ? search.species
      : []) as unknown as string[];
    const speciesData = speciesSlugs.map(
      item => species?.find(species => species.slug === item)?.id,
    );

    reset({
      sex,
      species: speciesData,
      price: [+search.priceMin, +search.priceMax],
    });
  }, [searchParams, reset, species]);

  // Handle submit form data
  const onSubmit: SubmitHandler<NoticeFilterForm> = data => {
    const speciesData = data.species.map(
      item => species?.find(species => species.id === item)?.slug,
    );

    const updatedQuery = updateSearchParams({
      searchParams,
      searchType: 'filter',
      dataToUpdate: {
        sex: data.sex,
        species: speciesData,
        priceMin: data.price[0],
        priceMax: data.price[1],
      },
    });
    navigate(updatedQuery);
    toggleDrawer();
  };

  const resetFilter = () => {
    navigate(ROUTES.pets);
    toggleDrawer();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      gap={{ xs: 3, md: 4 }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
    >
      <Box gap={{ xs: 2, md: 2.5 }} display="flex" flexDirection="column">
        {speciesOptions.length > 0 && (
          <CheckboxGroup
            name="species"
            label="Species"
            placeholder="Choose species"
            control={control}
            options={speciesOptions}
            withSearch
          />
        )}

        <CheckboxGroup
          name="sex"
          label="Sex"
          placeholder="Choose sex"
          control={control}
          options={genderOptions as SelectOption[]}
        />

        {activeCategory === 'sell' && (
          <DoubleRangeField
            name="price"
            methods={methods}
            minRange={defaultPriceRange.minPrice}
            maxRange={defaultPriceRange.maxPrice}
            caption="UAH"
            label="Price"
          />
        )}
      </Box>

      <Box gap={{ xs: 2, md: 2.5 }} display="flex" flexDirection="column">
        <Button variant="contained" type="submit" size="large">
          Submit
        </Button>
        <Button
          variant="outlined"
          type="button"
          size="large"
          onClick={resetFilter}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default FilterForm;
