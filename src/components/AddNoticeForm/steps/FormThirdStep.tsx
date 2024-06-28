import { UseFormReturn } from 'react-hook-form';

import FileUploadField from '@/components/RHFComponents/FileUploadField';

import { FormTitle } from '../components';

interface IProp {
  methods: UseFormReturn<NoticeForm, unknown, undefined>;
}

const FormThirdStep: React.FC<IProp> = ({ methods }) => {
  return (
    <>
      <FormTitle
        title="Upload your pet image"
        subtitle="Let us know how it looks like"
        withHeader
      />
      <FileUploadField methods={methods} />
    </>
  );
};

export default FormThirdStep;
