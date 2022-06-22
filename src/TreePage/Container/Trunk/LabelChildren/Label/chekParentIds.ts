import { Item } from 'api/data';

export const chekParentIds = (drag: Item, dropParentId: number): boolean=>{

  const find = (arr: Item[], id: number): Item | undefined => {
    for (const obj of arr) {
      if (obj.id === id){
        console.log(obj.label)
        return obj};
      const nestedObj = find(obj.children, id);
      if (nestedObj) return nestedObj;
    }
  }
  return !!find([drag], dropParentId);
}
