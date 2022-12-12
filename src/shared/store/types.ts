import { Actions } from 'shared/store/actions';
import { Game, Provider, Filters, Page } from 'shared/types';

export type PayloadAction<T = any> = {
  type: Actions;
  payload?: T;
};

export type ActionsT = Game | Provider[] | Filters | Page;

export type ActionCreator<T = any> = (param?: T) => PayloadAction<T>;
