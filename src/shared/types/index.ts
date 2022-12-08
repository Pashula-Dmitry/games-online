import { AxiosRequestConfig } from "axios";

export interface Provider {
  id: string;
  title: string;
}

type Collection = {
  [collection: string]: number;
};

type Real = {
  [currencyCode: string]: {
    id: number;
    jackpot: number;
  };
};

export interface Game {
  [gameId: string]: {
    title: string;
    provider: string;
    collections: Collection;
    real: Real;
    demo?: string;
  };
};

export interface IGame {
  getGames(url: string, config: AxiosRequestConfig): Promise<Game>;
  getProviders(url: string, config: AxiosRequestConfig): Promise<Provider[]>;

}
