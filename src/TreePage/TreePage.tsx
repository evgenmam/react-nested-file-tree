import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './Container/Container';
import { getDataAsync } from '../store/data/getData';

export const TreePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAsync());
  }, [dispatch]);

  return (
    <div className='wrapper'>
        <Container />
    </div>
  );
};
