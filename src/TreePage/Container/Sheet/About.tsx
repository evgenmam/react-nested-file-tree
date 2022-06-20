import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectDataById } from 'store/data/selectors';

export const About: React.FC = () => {
  const { id } = useParams();
  const selected = useSelector(selectDataById(Number(id)));
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
