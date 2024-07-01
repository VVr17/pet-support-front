import { Box } from '@mui/material';
import { UseFormReturn } from 'react-hook-form';

import DatePickerField from '@/components/RHFComponents/DatePickerField';
import Field from '@/components/RHFComponents/Field';

import { FormTitle } from '../components';

interface IProp {
  methods: UseFormReturn<NoticeForm, unknown, undefined>;
}

const FormFirstStep: React.FC<IProp> = ({ methods: { control } }) => {
  return (
    <>
      <FormTitle
        title="Provide main information"
        subtitle="We need this data to get acquainted with your pet"
        withHeader
      />
      <Box display="flex" gap={{ xs: 2, md: 3 }} flexDirection="column">
        <Field
          name="title"
          label="Title"
          control={control}
          placeholder="your notice title"
        />
        <Box
          display="flex"
          gap={{ xs: 2, md: 3 }}
          flexDirection={{ xs: 'column', md: 'row' }}
        >
          <Field
            name="name"
            control={control}
            placeholder="Your pet name"
            label="Name"
          />
          <Field
            name="breed"
            control={control}
            placeholder="Your pet breed"
            label="Breed"
          />
        </Box>

        <DatePickerField
          name="dateOfBirth"
          label="Date of birth"
          control={control}
        />
        <Field
          name="location"
          control={control}
          placeholder="Current location"
          label="Location"
        />
      </Box>
    </>
  );
};

export default FormFirstStep;
