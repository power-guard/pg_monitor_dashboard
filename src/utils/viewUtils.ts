import { addMinutes, format, formatDistanceToNowStrict, isValid, parseISO } from 'date-fns';

const getIsoToLocalDate = (iso: string): Date => {
  const date = parseISO(iso);
  return addMinutes(date, -date.getTimezoneOffset());
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
