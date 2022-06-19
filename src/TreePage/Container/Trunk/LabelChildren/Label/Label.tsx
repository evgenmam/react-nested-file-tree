import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Item } from '../../../../../api/data';
import { LabelChildren } from '../LabelChildren';
import { selectLevel } from '../../../../../store/data/selectors';
// import { useDispatch } from 'react-redux';
// import { actions } from 'store/data/data';

import styles from '../../../../../styles/Home.module.css';

interface Props {
  item: Item;
}
export const Label: React.FC<Props> = ({ item }) => {
  const selectedLevel = useSelector(selectLevel)
  const [style, setStyle] = useState(styles.rootlevel);
  useEffect(() => {
    if (selectedLevel > 0) {
      setStyle('line');
    }
  },[setStyle, selectedLevel]);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (item.parentId === -1){
  //     dispatch(actions.resetLevel());
  //   } 
  // },[]);


  return (
    <div>
      <p className={style}>
        {item.label} {selectedLevel}
      </p>
      {item.children && (
        <LabelChildren
          items={item.children}
        />
      )}
    </div>
  );
};
