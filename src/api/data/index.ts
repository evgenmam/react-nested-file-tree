import { connect } from '../connect';
import { transformEntityLabelPage } from './transformEntityLabelPage';
import { createTree } from './createTree';

export type EntityLabelPage = {
  labels: Array<string>;
  entityLongIds: Array<number>;
  parentEntityLongIds: Array<number>;
};
export type Data = Record<string, any> & {
  files: {
    'view.json': {
      content: string;
    };
  };
};
type Result = {
  entityLabelPages: [EntityLabelPage];
};
export type Item = {
  id: number;
  label: string;
  parentId: number;
  children: Item[];
};
export const data = {
  get: async (): Promise<Item[]> => {
    const { data } = await connect.get<Data>('');
    const result: Result = JSON.parse(`${data.files['view.json'].content}`);
    return createTree(transformEntityLabelPage(result.entityLabelPages[0]));
  },
};
