import type { RouteObject } from "react-router-dom";

import { Main } from 'pages/main';
import { Game } from 'pages/game';
import { NotFound } from 'shared/components/not-found';

export const enum ROUTES {
  MAIN = '/',
  GAME = '/games/:param1/:param2/:id',
  NOT_FOUND = '*',
}

export const routes: RouteObject[] = [
  { path: ROUTES.MAIN, element: <Main />, index: true},
  { path: ROUTES.GAME, element: <Game />},
  { path: ROUTES.NOT_FOUND, element: <NotFound text={'Please return to main page'} />},
];
