import React, { useEffect } from 'react';
import { Container } from './Container/Container';
import { useDispatch } from 'react-redux';
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
