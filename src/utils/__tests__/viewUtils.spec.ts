import { getDistanteToNow, getElapsedTime, getFormattedDate } from 'utils/viewUtils';

describe('getIsoToLocalDate', () => {
  it('formats date without applying local time difference', () => {
    const date = getFormattedDate(`2021-03-23T14:18:00.614`);
    expect(date).toBe('2021-03-23 14:18:00');
  });

  it('parses time without T and miliseconds', () => {
    const date = getFormattedDate(`2021-02-20 00:15:00`);
    expect(date).toBe('2021-02-20 00:15:00');
  });

  it('returns "Invalid date" string when invalid date format received', () => {
    const date = getFormattedDate(`20-02-2021 00:15:00`);
    expect(date).toBe('Invalid date');
  });

  it('returns "Invalid time" string when invalid date format received', () => {
    const date = getDistanteToNow(`20-02-2021 00:15:00`);
    expect(date).toBe('Invalid time');
  });
});

describe('getElapsedTime', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2021-03-02T15:08:00.000'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('returns correct elapsed time', () => {
    const timeDiff = getElapsedTime('2021-03-02T15:07:56.000');
    expect(timeDiff).toBe(4);
  });

  it('returns correct elapsed time', () => {
    const timeDiff = getElapsedTime('2021-03-02T15:06:00.000');
    expect(timeDiff).toBe(120);
  });

  it('returns 0 when invalid date format', () => {
    const timeDiff = getElapsedTime('20-02-2021 00:15:00');
    expect(timeDiff).toBe(0);
  });
});
