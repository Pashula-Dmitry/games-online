import { useContext } from 'react';
import { DispatchProvider } from '../contexts/store';


export const useDispatch = () => useContext(DispatchProvider);
