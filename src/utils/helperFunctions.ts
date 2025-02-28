import {LEVEL} from '../types/Constants';

export const getLevels = () => {
  const levels = Object.keys(LEVEL)
    .filter(item => !isNaN(item))
    .map(item => ({key: Number(item), value: LEVEL[Number(item)]}));
  return levels;
};
