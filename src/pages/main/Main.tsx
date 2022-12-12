import { useEffect } from 'react';
import { useDispatch } from 'shared/hooks/useDispatch';
import { useStore } from 'shared/hooks/useStore';

import { Box } from '@mui/material';
import { Filters } from 'shared/components/filters';
import { CircularIndeterminate } from 'shared/components/loading';
import { PaginationMUI } from 'shared/components/pagination';
import { ListGames } from 'shared/components/ListGames';

import { PAGE_LIMIT } from 'shared/constatns';
import * as ac from 'shared/store/action-creators';

import styles from './styles';


export function Main(): JSX.Element {
  const { state: { page, offset, filteredGames, loader } } = useStore();
  const { getGames, dispatch, getProviders} = useDispatch();

  useEffect(() => {
    (
      async function() {
        try {
          dispatch(ac.getGames());
          const response = await Promise.all([getGames(), getProviders()]);
          dispatch(ac.setGames(response[0].data));
          dispatch(ac.setProviders(response[1].data));
        } catch(err) {
          console.error(err);
          dispatch(ac.setGames({}));
        }
      }
    )()
  }, [dispatch, getGames, getProviders]);

  return (
    <Box sx={styles.main}>
      <Filters />
      {
        loader ? <CircularIndeterminate /> : <ListGames data={filteredGames} offset={offset} />
      }
      <Box sx={styles.paginationBox}>
        <PaginationMUI page={page} count={Math.ceil(Object.entries(filteredGames).length / PAGE_LIMIT)} />
      </Box>
    </Box>
  );
}
