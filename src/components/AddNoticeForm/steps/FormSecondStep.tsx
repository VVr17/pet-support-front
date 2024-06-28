import { Box } from '@mui/material';
import { UseFormReturn } from 'react-hook-form';

import CustomRadioGroup from '@/components/RHFComponents/CustomRadioGroup';
import DropdownInput from '@/components/RHFComponents/DropdownInput';
import RangeField from '@/components/RHFComponents/RangeField';
import { useCategories } from '@/hooks/useQuery/useCategories';
import useResponsive from '@/hooks/useResponsive';

import { FieldLabel,FormTitle } from '../components';
import { getCategoriesOptions, sexOptions } from '../utils/selectOptions';
import { getRadioGroupTestDriveStyles } from './styles';

interface IProp {
  methods: UseFormReturn<NoticeForm, unknown, undefined>;
}

const FormSecondStep: React.FC<IProp> = ({ methods: { control, watch } }) => {
  const { data: categories } = useCategories();
  const categoryOptions = getCategoriesOptions(categories);
  const IsForSell =
    categories?.find(({ slug }) => slug === 'sell')?.id === watch('categoryId');

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
          <FieldLabel label="Choose sex" mb={{ xs: 1, md: 2 }} />
          <CustomRadioGroup name="sex" control={control} options={sexOptions} />
        </Box>
        <Box>
          <FieldLabel label="Select category" mb={{ xs: 1, md: 2 }} />
          <DropdownInput
            name="categoryId"
            control={control}
            placeholder="Choose category"
            options={categoryOptions}
          />
        </Box>

        <Box display={IsForSell ? 'block' : 'none'}>
          <FieldLabel label="Price" mb={{ xs: 1, md: 2 }} />
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
