import { Item } from '../../api/data';

export const removeById = (arr: Item[], id: number): Item[] => {
  return arr
    .filter((a) => a.id !== id)
    .map((e) => {
      return { ...e, children: removeById(e.children || [], id) };
    });
};

export const update = (items: Item[], item: Item): Item[] => {
  const newItems = items.reduce<Item[]>((acc: Item[], cur: Item) => {
    if (cur.id === item.id) {
      acc.push(item);
    } else {
      acc.push({ ...cur, children: update(cur.children, item) });
    }
    return acc;
  }, []);
  return newItems;
};

export const find = (arr: Item[], id: number): Item | undefined => {
  for (const obj of arr) {
    if (obj.id === id) return obj;
    const nestedObj: Item | undefined = find(obj.children, id);
    if (nestedObj) return nestedObj;
  }
};
