import React from 'react';
import { Item } from '../../../../api/data';
import { Label } from './Label/Label';

interface Props {
  items: Item[];
  li: number;
}

export const LabelChildren: React.FC<Props> = ({ items, li }) => {
  return (
    <div>
      {items &&
        items.map((item) => (
          <Label
            key={item.id}
            item={item}
            li={li}
          />
        ))}
    </div>
  );
};
