import { useContext } from 'react';
import { StoreProvider } from '../contexts/store';

export const useStore = () => useContext(StoreProvider);
