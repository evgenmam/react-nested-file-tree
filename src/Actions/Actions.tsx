import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectData, selectedItem } from '../store/data/selectors';
import { getDataAsync } from '../store/data/getData';
import { actions } from '../store/data/data';

export const Actions = () => {
  const dispatch = useDispatch();
  const selected = useSelector(selectedItem);
  const data = useSelector(selectData);
  return (
    <footer>
      <aside className='sidebar'>
        <button
          className='button-link'
          onClick={() => {
            console.log(data)
          }}
        >
          apply
        </button>
        <button
          className='button-link'
          onClick={() => {
            dispatch(getDataAsync());
          }}
        >
          Refresh
        </button>
        <button
          className='button-link'
          onClick={() => {
            if (selected) {
              dispatch(actions.deleteItem({ id: selected.id }));
            }
          }}
        >
          Remove
        </button>
      </aside>
    </footer>
  );
};
