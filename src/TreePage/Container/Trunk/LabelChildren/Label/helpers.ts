import { Item } from '../../../../../api/data';

export const chekParentIds = (drag: Item, dropParentId: number): boolean => {
  const find = (arr: Item[], id: number): Item | undefined => {
    for (const obj of arr) {
      if (obj.id === id) {
        return obj;
      }
      const nestedObj = find(obj.children, id);
      if (nestedObj) return nestedObj;
    }
  };
  return !!find([drag], dropParentId);
};
export const cleanDropFromDragItem = (drop: Item, dragId: number): Item => {
  const removeById = (arr: Item[], id: number): Item[] => {
    return arr
      .filter((a) => a.id !== id)
      .map((e) => {
        return { ...e, children: removeById(e.children || [], id) };
      });
  };
  return removeById([drop], dragId)[0]
};
