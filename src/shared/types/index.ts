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

export type GameT = {
  title: string;
  provider: string;
  collections: Collection;
  real: Real;
  demo?: string;
};

export interface Game {
  [gameId: string]: GameT;
}

export type Filters = {
  selectedProviders?: Provider[],
  search?: string;
};

export type Page = {
  page: number;
  offset: number;
};

export type ReturnTypeReduceProviders = {
  ids: string[];
  titles: string[];
};
