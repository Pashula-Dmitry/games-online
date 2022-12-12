import { Reducer } from 'react';
import { Filters, Game, Page, Provider, ReturnTypeReduceProviders } from 'shared/types';
import { PayloadAction } from './types';
import { Actions } from 'shared/store/actions';
import { initialState } from 'core/StoreContext';

export type InitState = {
  games: Game;
  filteredGames: Game;
  providers: Provider[],
  selectedProviders: Provider[],
  search: string,
  loader: boolean;
  page: number;
  offset: number;
}

const gettingGamesOrProviders = (state: InitState) => ({
  ...state,
  loader: true,
});

const setProviders = (state: InitState, action: PayloadAction<Provider[]>) => ({
  ...state,
  loader: false,
  providers: action.payload as Provider[],
});

const setGames = (state: InitState, action: PayloadAction<Game>) => ({
  ...state,
  loader: false,
  games: action.payload as Game,
  filteredGames: action.payload as Game,
});

const filtersData = (state: InitState, action: PayloadAction<Filters>) => {
  let filteredLocalGames = Object.entries(state.games);
  const { selectedProviders, search } = action.payload as Filters;
  const isSelectedAnyProvider = Boolean(selectedProviders || state.selectedProviders.length);
  const hasAnySearch = Boolean(search || state.search.length);

  if (isSelectedAnyProvider) {
    const { ids } = (selectedProviders ?? state.selectedProviders).reduce(
      (acc: ReturnTypeReduceProviders, { id, title}): ReturnTypeReduceProviders  => {
        return ({ ids: [...acc.ids, id], titles: [...acc.titles, title] });
    }, {
      ids: [],
      titles: [],
    });

    filteredLocalGames = filteredLocalGames.filter(([, game]) => {
      return ids.includes(game.provider);
    });
  }

  if (hasAnySearch) {
    filteredLocalGames = filteredLocalGames.filter(([, game]) => {
      return game.title.toLowerCase().includes(( (search ?? state.search) as string).toLowerCase());
    });
  }

  return {
    ...state,
    page: 1,
    offset: 0,
    filteredGames: Object.fromEntries(filteredLocalGames),
    search: action.payload?.search || state.search,
    selectedProviders: action.payload?.selectedProviders || state.selectedProviders,
  };
};

const updatePage = (state: InitState, action: PayloadAction<Page>) => ({
  ...state,
  page: action.payload?.page as number,
  offset: action.payload?.offset as number,
});

const clearFilters = (state: InitState) => ({
  ...state,
  selectedProviders: initialState.selectedProviders,
  search: initialState.search,
  filteredGames: state.games,
});

export const reducer: Reducer<InitState, PayloadAction> = (state, action: PayloadAction) => {
  switch (action.type) {
    case Actions.GET_PROVIDERS: return gettingGamesOrProviders(state);
    case Actions.SET_PROVIDERS: return setProviders(state, action);
    case Actions.GET_GAMES: return gettingGamesOrProviders(state);
    case Actions.SET_GAMES: return setGames(state, action);
    case Actions.SET_FILTERS: return filtersData(state, action);
    case Actions.UPDATE_PAGE: return updatePage(state, action);
    case Actions.CLEAR_FILTERS: return clearFilters(state);
    default: return state;
  }
};
