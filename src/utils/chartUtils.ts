export const getChartLineColors = (index: number): string => {
  const defaultHue = 130;
  const multiplier = 4;
  return `hsl(${defaultHue + index * multiplier}deg 53% 29%)`;
};
