import {SxProps} from '@mui/material';
import { CSSProperties } from 'react';

const provider: SxProps = {
  margin: '20px 0',
  fontSize: '24px',
};

const gameFrame: SxProps = {
  marginBottom: '40px',
};

const buttonBack: SxProps = {
  margin: '30px auto',
  display: 'flex',
  columnGap: '15px',
  justifyContent: 'center',
};

const image: CSSProperties = {
    display: 'flex',
    maxWidth: '100%',
    height: 'auto',
    justifyContent: 'center',
    objectFit: 'cover',
    margin: '0 auto 20px auto',
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '5px',
};



export default {
  provider,
  image,
  gameFrame,
  buttonBack,
};
