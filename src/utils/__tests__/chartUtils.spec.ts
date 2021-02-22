import { getChartLineColors } from 'utils/chartUtils';

describe('getChartLineColors', () => {
  it('returns yellow', () => {
    expect(getChartLineColors(0)).toBe('hsl(66deg 82% 55%)');
  });

  it('returns green', () => {
    expect(getChartLineColors(16)).toBe('hsl(130deg 82% 55%)');
  });

  it('returns cyan', () => {
    expect(getChartLineColors(27)).toBe('hsl(174deg 82% 55%)');
  });

  it('returns blue', () => {
    expect(getChartLineColors(36)).toBe('hsl(210deg 82% 55%)');
  });
});
