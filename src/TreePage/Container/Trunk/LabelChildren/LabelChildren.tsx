import React, { useEffect } from 'react';
import { Item } from 'api/data';
import { Label } from './Label/Label';
import { useDispatch } from 'react-redux';
import { actions } from 'store/data/data';

interface Props {
  items: Item[];
}

export const LabelChildren: React.FC<Props> = ({ items }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (items.length !== 0){
      dispatch(actions.increaseLevel());
    } 
  },[dispatch, items.length]);


  return (
    <div>
      {items && items.map((item) => <Label key={item.id} item={item} />)}
    </div>
  );
};
