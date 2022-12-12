import HTTP from 'core/api';
import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';
import type { Game, Provider } from 'shared/types';

class Games {
  async getGames(url: string, config?: AxiosRequestConfig) {
    return await HTTP.get<Game>(url, config);
  }

  async getProviders(url: string, config?: AxiosRequestConfig) {
    return await HTTP.get<Provider[]>(url, config);
  }

  async getImage(url: string) {
    return await axios.get<string>(url, {
      responseType: 'arraybuffer',
      headers: {
        Accept: '*/*',
      },
    });
  }
}

export default new Games();
