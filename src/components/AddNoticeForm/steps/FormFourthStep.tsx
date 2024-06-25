import { UseFormReturn } from 'react-hook-form';

import { FormTitle } from '../components';
import TextArea from '@/components/RHFComponents/TextArea';

interface IProp {
  methods: UseFormReturn<NoticeForm, unknown, undefined>;
}

const FormFourthStep: React.FC<IProp> = ({ methods: { control } }) => {
  return (
    <>
      <FormTitle
        title="Almost done, get us a little bit more info"
        subtitle="Describe any specific details you'd like people to know about"
        withHeader
      />

      <TextArea
        name="comments"
        control={control}
        placeholder="Text your comments here..."
      />
    </>
  );
};

export default FormFourthStep;
