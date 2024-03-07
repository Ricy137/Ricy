export const randomWithRange = (min = 1, max = 0) => {
  return Math.random() * (max - min) + min;
};
