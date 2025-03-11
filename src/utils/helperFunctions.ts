import {LEVEL} from '../types/Constants';

export const getLevels = () => {
  const levels = Object.keys(LEVEL)
    .filter(item => !isNaN(item))
    .map(item => ({key: Number(item), value: LEVEL[Number(item)]}));
  return levels;
};

export const randomizeOptions = (options: string[]) => {
  for (let i = options.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
};
