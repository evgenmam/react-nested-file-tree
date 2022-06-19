import { Item } from '.';

export const createTree = (list: Item[]): Item[] => {
  const map = list.reduce<Record<string, number>>((acc, el, i) => {
    acc[el.id] = i;
    return acc;
  }, {});

  let roots: Item[] = [];
  let node: Item;
  list.forEach((el, i) => {
    node = list[i];
    if (el.parentId === -1) {
      roots.push(node);
    } else {
      list[map[node.parentId]].children.push(node);
    }
  });
  return roots;
};
