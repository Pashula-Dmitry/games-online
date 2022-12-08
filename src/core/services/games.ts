import type {AxiosRequestConfig} from 'axios';
import HTTP from 'core/api';
import {IGame, Game, Provider} from 'shared/types';

class Games implements IGame {
  async getGames(url: string, config?: AxiosRequestConfig): Promise<Game> {
    return await HTTP.get(url, config);
  }

  async getProviders(url: string, config?: AxiosRequestConfig): Promise<Provider[]> {
    return await HTTP.get(url, config);
  }
}

export default new Games();
