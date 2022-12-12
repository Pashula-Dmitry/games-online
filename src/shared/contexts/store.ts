import { Dispatch, createContext } from 'react';
import { ActionsT, PayloadAction } from 'shared/store/types';
import { InitState } from 'shared/store/reducer';
import { Game, Provider } from 'shared/types';
import { AxiosResponse } from 'axios';

type CtxState = {
  state: InitState;
};

type CtxDispatch = {
  dispatch: Dispatch<PayloadAction<ActionsT>>;
  getImage: (id: string) => Promise<AxiosResponse<string, any>>;
  getProviders: () => Promise<AxiosResponse<Provider[], any>>;
  getGames: () =>  Promise<AxiosResponse<Game, any>>;
};

// @ts-ignore
export const StoreProvider = createContext<CtxState>(null);

// @ts-ignore
export const DispatchProvider = createContext<CtxDispatch>(null);
