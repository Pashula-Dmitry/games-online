import { FC } from 'react';
import { Box } from '@mui/material';

type Props<T> = {
  data: T[];
  renderItem: FC<T>;
};

export function GenericList<T,>({
  data,
  renderItem
}: Props<T>) {

  if (!data.length) {
    return <Box sx={{
      fontSize: '28px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>List is empty</Box>
  }

  return (<>{data.map(renderItem)}</>)
}
