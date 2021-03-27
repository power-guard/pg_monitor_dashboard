import { format, formatDistanceToNowStrict, isValid, parseISO } from 'date-fns';

const getIsoToLocalDate = (iso: string): Date => {
  return parseISO(iso);
};

export const getDistanteToNow = (iso: string): string => {
  const localDate = getIsoToLocalDate(iso);
  return isValid(localDate) ? formatDistanceToNowStrict(localDate, { addSuffix: true }) : 'Invalid time';
};

export const getFormattedDate = (iso: string, formatting?: string): string => {
  const localDate = getIsoToLocalDate(iso);
  return isValid(localDate)
    ? format(getIsoToLocalDate(iso), formatting ? formatting : 'yyyy-MM-dd HH:mm:ss')
    : 'Invalid date';
};

export const getElapsedTime = (iso: string): number => {
  const start = getIsoToLocalDate(iso);

  if (!isValid(start)) return 0;

  const now = new Date();

  const timeDiff = now.valueOf() - start.valueOf(); //in milliseconds.
  return timeDiff / 1000; // in sececonds
};
