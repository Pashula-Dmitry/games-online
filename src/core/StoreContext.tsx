import { ReactNode, useCallback, useReducer } from 'react';
import { InitState, reducer } from 'shared/store/reducer';
import { DispatchProvider, StoreProvider } from 'shared/contexts/store';
import game from 'core/services/games';

export const initialState: InitState = {
  filteredGames: {},
  games: {},
  providers: [],
  selectedProviders: [],
  search: '',
  loader: false,
  page: 1,
  offset: 0,
};

type Props = {
  children: ReactNode;
};

export function StoreContext({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getGames = useCallback(async () => game.getGames('api/games/allowed_desktop'), []);
  const getProviders = useCallback(async () => game.getProviders('api/games/providers'), []);
  const getImage = useCallback(async (id: string) => game.getImage(`${process.env.REACT_APP_PICTURE}${id}.png`), []);

  return (
    <StoreProvider.Provider value={{ state }}>
      <DispatchProvider.Provider value={{ dispatch, getGames, getProviders, getImage }}>
        {children}
      </DispatchProvider.Provider>
    </StoreProvider.Provider>
  );
}
