import { getFormattedDate } from 'utils/viewUtils';

describe('getIsoToLocalDate', () => {
  it('transforms UTC iso to local time date', () => {
    const date = getFormattedDate(`2021-02-22T01:26:31.207`);
    expect(date).toBe('02/22/2021 10:26:31');
  });

  it('parses time without T and miliseconds', () => {
    const date = getFormattedDate(`2021-02-20 00:15:00`);
    expect(date).toBe('02/20/2021 09:15:00');
  });
});
