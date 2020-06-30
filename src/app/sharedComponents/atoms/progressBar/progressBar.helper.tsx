const ROUND_PRECISION = 1000;

export const getPercentage = (
  now: number,
  min: number,
  max: number
): number => {
  const percentage = ((now - min) / (max - min)) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
};
