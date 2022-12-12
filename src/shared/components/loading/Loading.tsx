import * as React from 'react';
import { CircularProgress, Box } from '@mui/material';
import { styles } from './styles';

export function CircularIndeterminate() {
  return (
    <Box sx={styles.loader}>
      <CircularProgress />
    </Box>
  );
}
