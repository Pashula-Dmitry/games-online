import * as yup from 'yup';
import { SEARCH_MIN_LENGTH } from 'shared/constatns';

export const validationFiltersSchema = yup.object({
  search: yup.string().min(SEARCH_MIN_LENGTH, 'Min 3 letters for start search'),
});
