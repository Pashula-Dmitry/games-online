import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'shared/hooks/useDispatch';

import { Box, IconButton, Typography } from "@mui/material";

import defaultImage from 'assets/images/emtyImg.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ROUTES } from "shared/constatns/routes";
import { toBase64 } from 'shared/helpers/toBase64';

import styles from './styles';

export function Game(): JSX.Element {
  const { param1, param2 } = useParams();
  const [provider, setProvider] = useState(() => [param1, param2].join('/'));
  const [photo, setImage] = useState('');
  const { getImage } = useDispatch();
  const { state: { demo } } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await getImage([param1, param2].join('/'));
      setImage(toBase64(res.data));
      setProvider([param1, param2].join('/'));
    })();
  }, [getImage, param1, param2]);

  return (
    <Box>
      <IconButton
        disableRipple
        disableFocusRipple
        disableTouchRipple
        onClick={() => navigate(ROUTES.MAIN)}
        sx={styles.buttonBack}
      >
        <Typography>Back</Typography>
        <ArrowBackIcon />
      </IconButton>
      <Typography component="h2" sx={styles.provider}>{provider}</Typography>
      <div>
        <img
          style={styles.image}
          src={photo || defaultImage}
          alt={provider}
          height={250}
          width={400}
        />
      </div>
      <Box sx={styles.gameFrame}>
        <iframe
          width="894"
          height="503"
          title={'custom title'}
          src={`${process.env.REACT_APP_API}${demo.substring(1)}`}
        />
      </Box>

    </Box>
  )
}

