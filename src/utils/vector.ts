export type Vector = [number, number];

export const randomVectors=(n: number): Vector[] => {
  return Array.from({ length: n }, () => [Math.random(), Math.random()]);
}
