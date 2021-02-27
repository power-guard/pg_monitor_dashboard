import { addMinutes, format, formatDistanceToNowStrict, parseISO } from 'date-fns';

const getIsoToLocalDate = (iso: string): Date => {
  const date = parseISO(iso);
  return addMinutes(date, -date.getTimezoneOffset());
};

export const getDistanteToNow = (iso: string): string => {
  return formatDistanceToNowStrict(getIsoToLocalDate(iso), { addSuffix: true });
};

export const getFormattedDate = (iso: string, formatting?: string): string => {
  return format(getIsoToLocalDate(iso), formatting ? formatting : 'yyyy-MM-dd HH:mm:ss');
};
