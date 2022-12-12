import { memo } from 'react';
import { Game } from "shared/types";
import { Box, Grid } from '@mui/material';
import { MediaCard } from 'shared/components/card';

import { PAGE_LIMIT } from 'shared/constatns';

import styles from 'pages/main/styles';
import sx from './styles';

type Props = {
  data: Game,
  offset: number;
};

function List({ data, offset }: Props) {
  const arrData = Object.entries(data);
  const startInx = offset >= 0 ? offset : 0;
  const endInx = startInx + PAGE_LIMIT > arrData.length ? arrData.length : startInx + PAGE_LIMIT;

  if (!arrData.length) {
    return <Box sx={sx.emptyState}>List is empty</Box>
  }

  return (
    <Grid container sx={styles.list} columns={12}>
      {
        arrData.slice(startInx, endInx).map(([key, data]) => (
          <Grid item xs={12} sm={6} md={4} xl={3} key={key}>
            <MediaCard name={key} card={data} />
          </Grid>
        ))
      }
    </Grid>
  );
}

export const ListGames = memo(List);
