import {useNavigate} from 'react-router-dom';

import {
  Card, CardActions, CardContent,
  CardMedia, Button, Typography,
} from '@mui/material';

import { GameT } from 'shared/types';
import emptyImg from 'assets/images/emtyImg.png';

import styles from './stypes';

type Props = {
  name: string;
  card: GameT;
};

export function MediaCard(props: Props) {
  const { card } = props;
  const navigate = useNavigate();

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={emptyImg}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="p" sx={styles.ellipsis}>
          {card.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="p" sx={styles.ellipsis}>
          Provider: {card.provider}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="large"
          onClick={() => navigate(`${card.demo}`, { state: {demo: card.demo}})}
        >
          Play
        </Button>
      </CardActions>
    </Card>
  );
}
