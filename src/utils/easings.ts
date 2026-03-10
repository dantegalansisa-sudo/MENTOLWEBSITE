type Bezier = [number, number, number, number];

export const EASINGS: Record<string, Bezier> = {
  premium:   [0.76, 0, 0.24, 1],
  smooth:    [0.25, 0.8, 0.25, 1],
  bounce:    [0.34, 1.56, 0.64, 1],
  cinematic: [0.86, 0, 0.07, 1],
};
