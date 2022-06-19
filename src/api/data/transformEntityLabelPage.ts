import { EntityLabelPage, Item } from '.';



export const transformEntityLabelPage = (rawEntity: EntityLabelPage): Item[] => {
  return rawEntity.entityLongIds.map((entityLongId, i) => ({
    id: entityLongId,
    label: rawEntity.labels[i],
    parentId: rawEntity.parentEntityLongIds[i],
    children: []
  }));
};
