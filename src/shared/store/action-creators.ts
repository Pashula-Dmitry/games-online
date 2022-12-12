import { Actions } from "./actions";
import { ActionCreator } from 'shared/store/types';
import { Filters, Game, Provider, Page } from 'shared/types';

export const getGames: ActionCreator = () => ({ type: Actions.GET_GAMES });
export const setGames: ActionCreator<Game> = (games) => ({ type: Actions.SET_GAMES, payload: games });

export const getProviders: ActionCreator = () => ({ type: Actions.GET_PROVIDERS });
export const setProviders: ActionCreator<Provider[]> = (games) => ({ type: Actions.SET_PROVIDERS, payload: games });

export const updatePage: ActionCreator<Page> = (page) => ({ type: Actions.UPDATE_PAGE, payload: page });

export const setFilters: ActionCreator<Filters> = (filters) => ({ type: Actions.SET_FILTERS, payload: filters });

export const clearFilters: ActionCreator = () => ({ type: Actions.CLEAR_FILTERS });
