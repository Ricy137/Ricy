import { randomWithRange } from '@/utils/random';
export type Vector = [number, number];

export const randomVectors = (n: number): Vector[] => {
  return Array.from({ length: n }, () => [
    Math.trunc(randomWithRange(400)),
    Math.trunc(randomWithRange(400)),
  ]);
};
