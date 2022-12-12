import { ChangeEvent, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'shared/hooks/useDispatch';

import Pagination from '@mui/material/Pagination';

import { updatePage } from 'shared/store/action-creators';
import { PAGE_LIMIT } from 'shared/constatns';

type Props = {
  page: number;
  count: number;
};

export function PaginationMUI({ page, count }: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { dispatch } = useDispatch();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const currentPage = parseInt(query.get('page') || '1', 10);
    dispatch(updatePage({page: currentPage, offset: (currentPage * PAGE_LIMIT) - PAGE_LIMIT}));
  }, []);

  useEffect(() => {
    navigate({
      pathname: location.pathname,
      search: '?page=' + page,
    });
  }, [page]);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    dispatch(updatePage({page: value, offset: (value * PAGE_LIMIT) - PAGE_LIMIT}));
  };

  return (
    <Pagination
      page={page}
      count={count}
      onChange={handleChange}
    />
  );
}
