import { useRoutes } from "react-router-dom";
import { routes } from 'shared/constatns/routes';

export function Routes() {
  return useRoutes(routes);
}
