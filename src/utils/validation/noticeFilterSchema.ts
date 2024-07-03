import * as yup from 'yup';

export const noticeFilterSchema = yup.object().shape({
  species: yup.array(yup.string()),
  gender: yup.array(yup.string()),
  price: yup.array(yup.number()),
});
