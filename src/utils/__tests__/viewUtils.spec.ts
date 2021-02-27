import { getDistanteToNow, getFormattedDate } from 'utils/viewUtils';

describe('getIsoToLocalDate', () => {
  it('transforms UTC iso to local time date', () => {
    const date = getFormattedDate(`2021-02-22T01:26:31.207`);
    expect(date).toBe('2021-02-22 10:26:31');
  });

  it('parses time without T and miliseconds', () => {
    const date = getFormattedDate(`2021-02-20 00:15:00`);
    expect(date).toBe('2021-02-20 09:15:00');
  });

  it('Returns "Invalid date" string when invalid date format received', () => {
    const date = getFormattedDate(`20-02-2021 00:15:00`);
    expect(date).toBe('Invalid date');
  });

  it('Returns "Invalid time" string when invalid date format received', () => {
    const date = getDistanteToNow(`20-02-2021 00:15:00`);
    expect(date).toBe('Invalid time');
  });
});
