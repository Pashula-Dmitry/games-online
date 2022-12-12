import { SxProps } from "@mui/material";
import { colors } from 'styles/colors';

const boxContent: SxProps = {
  minHeight: '175px',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  columnGap: '40px',
  flexWrap: 'wrap',
  marginBottom: '25px',
  borderRadius: '20px',

  background: colors.powderblue,
};

const search: SxProps = {
  flexBasis: '60%'
};


const select: SxProps = {
  minWidth: '200px',
};

export default {
  boxContent,
  select,
  search,
};
