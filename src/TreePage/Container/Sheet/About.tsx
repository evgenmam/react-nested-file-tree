import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectDataById } from '../../../store/data/selectors';
import { actions } from '../../../store/data/data';

export const About: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const selected = useSelector(selectDataById(Number(id)));
  useEffect(() => {
    if (selected) {
      dispatch(actions.setSelected(selected));
    }
  }, [dispatch, selected]);

  return (
    <div>
      {selected === undefined ? (
        ''
      ) : (
        <div>
          <h2>Label: {selected.label}</h2>
          <h2>Id: {selected.id}</h2>
          <h2>ParentId: {selected.parentId}</h2>
        </div>
      )}
    </div>
  );
};
