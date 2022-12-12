import { ChangeEvent, useEffect } from 'react';
import { useFormik } from 'formik';
import { useDebouncedCallback } from 'use-debounce';
import { Box, TextField, MenuItem } from '@mui/material';

import { useStore } from 'shared/hooks/useStore';
import { useDispatch } from 'shared/hooks/useDispatch';

import { validationFiltersSchema } from 'shared/components/filters/FormSheme';
import { clearFilters, setFilters } from 'shared/store/action-creators';
import { SEARCH_MIN_LENGTH } from 'shared/constatns';

import type { Filters as FiltersType } from 'shared/types';
import styles from './stypes';

type FormState = {
  search: string;
  selectedProviders: string;
};

export function Filters() {
  const {state: { providers, selectedProviders, search } } = useStore();
  const { dispatch } = useDispatch();
  const {values, handleChange, errors, touched, setFieldValue} = useFormik<FormState>({
    initialValues: {
      search: search,
      selectedProviders: selectedProviders[0]?.title ?? '',
    },
    validationSchema: validationFiltersSchema,
    onSubmit: (val) => {

    }
  });

  useEffect(() => {
    return () => {
      dispatch(clearFilters());
    };
  }, [dispatch]);

  const updateFilters = useDebouncedCallback((filters: FiltersType) => dispatch(setFilters(filters)), 350);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    touched.search = true;
    handleChange(event);
    if ((event.target.value.length >= SEARCH_MIN_LENGTH) || event.target.value.length === 0) {
      updateFilters({ search: event.target.value });
    }
  };

  const onChangeProviders = (event: ChangeEvent<HTMLInputElement>) => {
    const clickedProvider = providers.find((item) => item.title === event.target.value);

    if (clickedProvider) {
      setFieldValue('selectedProviders', clickedProvider.title);
      dispatch(setFilters({ selectedProviders: [clickedProvider], search: values.search }));
    }
  };

  return (
  <Box sx={styles.boxContent}>
    <TextField
      name="search"
      value={values.search}
      onChange={onChangeSearch}
      label="Search"
      variant="outlined"
      error={touched.search && Boolean(errors.search)}
      helperText={touched.search && errors.search}
      sx={styles.search}
    />
    <TextField
      name="selectedProviders"
      value={values.selectedProviders}
      onChange={onChangeProviders}
      id="outlined-select-currency"
      label="Providers"
      variant="outlined"
      select
      sx={styles.select}
    >
      {
        providers.map(({ id, title }) => (
          <MenuItem key={id} value={title}>
            {title}
          </MenuItem>
        ))
      }
    </TextField>
  </Box>
  );
}
