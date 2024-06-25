import { UseFormReturn } from 'react-hook-form';
import { Box } from '@mui/material';

import { FormTitle, FieldLabel } from '../components';
import DropdownInput from '@/components/RHFComponents/DropdownInput';
import RangeField from '@/components/RHFComponents/RangeField';
import CustomRadioGroup from '@/components/RHFComponents/CustomRadioGroup';
import { getRadioGroupTestDriveStyles } from './styles';
import useResponsive from '@/hooks/useResponsive';

interface IProp {
  methods: UseFormReturn<NoticeForm, unknown, undefined>;
}

const FormSecondStep: React.FC<IProp> = ({ methods: { control } }) => {
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
          <CustomRadioGroup
            name="sex"
            control={control}
            options={[
              { value: 0, label: 'Male' },
              { value: 1, label: 'Female' },
            ]}
          />
        </Box>
        <Box>
          <FieldLabel label="Select category" mb={{ xs: 1, md: 2 }} />
          <DropdownInput
            name="categoryId"
            control={control}
            placeholder="Choose category"
            options={[
              { value: '1', label: 'sell' },
              { value: '2', label: 'i good hand' },
              { value: '3', label: 'lost-found' },
            ]}
          />
        </Box>

        <Box>
          <FieldLabel label="Price" mb={{ xs: 1, md: 2 }} />
          <RangeField
            name="price"
            control={control}
            placeholder="Price"
            minRange={0}
            maxRange={100}
            label="UAH"
          />
        </Box>
      </Box>
    </>
  );
};

export default FormSecondStep;
