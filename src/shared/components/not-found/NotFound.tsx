import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from 'shared/constatns/routes';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from '@mui/material';

type Props = {
  text: string,
};

export function NotFound(props: Props): JSX.Element {
  const { text } = props;
  const { pathname } = useLocation();

  return (
    <Box>
      <p>Route: {pathname} is not exist</p>
      <p>{text}</p>
      <Link to={ROUTES.MAIN}>Back <ArrowBackIcon /></Link>
    </Box>
  );
}
