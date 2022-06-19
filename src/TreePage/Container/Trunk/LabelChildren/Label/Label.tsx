import React, { useEffect, useState } from 'react';
import { Item } from '../../../../../api/data';
import { LabelChildren } from '../LabelChildren';

import styles from '../../../../../styles/Home.module.css';

interface Props {
  item: Item;
  li: number;
}
export const Label: React.FC<Props> = ({ item, li }) => {
  const [levelStyle, setLevelStyle] = useState({marginLeft: '0px'});
  useEffect(() => {
    if (li > 0) {
      const marginLeft: string =  (25*li).toString() + 'px';
      setLevelStyle({marginLeft})
    } 
  },[li]);

  return (
    <div>
      <p className={styles.rootlevel} style={levelStyle}>
        {item.label} {li}
      </p>
      {item.children && (
        <LabelChildren
          items={item.children}
          li={li+1}
        />
      )}
    </div>
  );
};
