import { Box, Grid } from '@mui/material';
import { UseFormReturn } from 'react-hook-form';

import CustomRadioGroup from '@/components/RHFComponents/CustomRadioGroup';
import DropdownInput from '@/components/RHFComponents/DropdownInput';
import RangeField from '@/components/RHFComponents/RangeField';
import { useCategories } from '@/hooks/useQuery/useCategories';
import { useSpecies } from '@/hooks/useQuery/useSpecies';
import useResponsive from '@/hooks/useResponsive';
import {
  getCategoriesOptions,
  getSpeciesOptions,
  sexOptions,
} from '@/utils/forms/selectOptions';

import { FieldLabel, FormTitle } from '../components';
import { getRadioGroupTestDriveStyles } from './styles';

interface IProp {
  methods: UseFormReturn<NoticeForm, unknown, undefined>;
}

const FormSecondStep: React.FC<IProp> = ({ methods: { control, watch } }) => {
  const { data: categories } = useCategories();
  const categoryOptions = getCategoriesOptions(categories);
  const IsForSell =
    categories?.find(({ slug }) => slug === 'sell')?.id === watch('categoryId');

  const { data: species } = useSpecies();
  const speciesOptions = getSpeciesOptions(species);

  const isMobile = useResponsive('down', 'sm');

  return (
    <>
      <FormTitle
        title="Additional details"
        subtitle="Additional details help us to put your notice to suitable category"
        withHeader
      />
      <Box display="flex" gap={4} flexDirection="column">
        <Box sx={getRadioGroupTestDriveStyles(isMobile)}>
          <FieldLabel label="Choose sex" mb={1} />
          <CustomRadioGroup name="sex" control={control} options={sexOptions} />
        </Box>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
            <FieldLabel label="Select category" mb={1} />
            <DropdownInput
              name="categoryId"
              control={control}
              placeholder="Choose category"
              options={categoryOptions}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FieldLabel label="Select species" mb={1} />
            <DropdownInput
              name="speciesId"
              control={control}
              placeholder="Choose species"
              options={speciesOptions}
            />
          </Grid>
        </Grid>

        <Box display={IsForSell ? 'block' : 'none'}>
          <FieldLabel label="Price" mb={1} />
          <RangeField
            name="price"
            control={control}
            placeholder="Price"
            minRange={0}
            maxRange={2000}
            label="UAH"
          />
        </Box>
      </Box>
    </>
  );
};

export default FormSecondStep;
