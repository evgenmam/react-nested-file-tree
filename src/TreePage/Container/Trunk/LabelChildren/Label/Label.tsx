import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Item } from '../../../../../api/data';
import { LabelChildren } from '../LabelChildren';
import { selectedDrag } from '../../../../../store/data/selectors';
import { actions } from '../../../../../store/data/data';
import { chekParentIds } from './chekParentIds';

import styles from '../../../../../styles/Home.module.css';

interface Props {
  item: Item;
  li: number;
}
export const Label: React.FC<Props> = ({ item, li }) => {
  // const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void
  const [levelStyle, setLevelStyle] = useState({ marginLeft: '0px' });
  useEffect(() => {
    if (li > 0) {
      const marginLeft: string = (25 * li).toString() + 'px';
      setLevelStyle({ marginLeft });
    }
  }, [li]);

  const dispatch = useDispatch();
  const dragedItem = useSelector(selectedDrag);

  const handlerDragStart = (e: React.DragEvent<HTMLDivElement>, item: Item) => {
    dispatch(actions.setSelectedDrag(item));
  };

  const handlerDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handlerDrop = (e: React.DragEvent<HTMLDivElement>, dropItem: Item) => {
    e.preventDefault();
    if (
      dragedItem &&
      dragedItem.id !== dropItem.id &&
      dragedItem.parentId !== dropItem.id &&
      !chekParentIds(dragedItem, dropItem.parentId)
    ) {
      const newItem = {
        ...dropItem,
        children: [...dropItem.children, { ...dragedItem, parentId: dropItem.id }],
      };
      console.log(dragedItem.id,dropItem.id , newItem);
      dispatch(actions.updateItem({ item: newItem, removedId: dragedItem.id }));
      // forceUpdate();
    }
  };

  return (
    <div>
      <Link to={`/about/${item.id.toString()}`}>
        <p
          className={styles.rootlevel}
          style={levelStyle}
          draggable={true}
          onDragStart={(e) => handlerDragStart(e, item)}
          onDragOver={handlerDragOver}
          onDrop={(e) => handlerDrop(e, item)}
        >
          {item.label}
        </p>
      </Link>
      {item.children && <LabelChildren items={item.children} li={li + 1} />}
    </div>
  );
};
