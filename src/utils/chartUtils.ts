//TODO: Some method to generate the palette of colors
//we want for the graph lines.
export const getChartLineColors = (index: number): string => {
  const defaultHue = 66;
  const multiplier = 4;
  return `hsl(${defaultHue + index * multiplier}deg 82% 55%)`;
};
