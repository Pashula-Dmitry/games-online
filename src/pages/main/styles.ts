import { SxProps } from "@mui/material";


const main: SxProps = {
  padding: '40px 80px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const list: SxProps = {
  justifyContent: 'center',
  gridGap: '18px',
};

const paginationBox: SxProps = {
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center',
};

export default {
  main,
  list,
  paginationBox,
};
