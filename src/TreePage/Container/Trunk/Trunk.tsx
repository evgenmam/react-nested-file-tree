import React from 'react';
import { Item } from '../../../api/data';
import { LabelChildren } from './LabelChildren/LabelChildren';

interface Props {
  data: Item[];
}

export const Trunk: React.FC<Props> = ({ data }) => {
  const li = 0;
  return (
    <div className='left'>
      <LabelChildren items={data} li={li} />
    </div>
  );
};
