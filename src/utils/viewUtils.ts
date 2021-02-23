import { addMinutes, format, formatDistanceToNow, parseISO } from 'date-fns';

const getIsoToLocalDate = (iso: string): Date => {
  const date = parseISO(iso);
  return addMinutes(date, -date.getTimezoneOffset());
};

export const getDistanteToNow = (iso: string): string => {
  return formatDistanceToNow(getIsoToLocalDate(iso), { addSuffix: true });
};

export const getFormattedDate = (iso: string, formatting?: string): string => {
  return format(getIsoToLocalDate(iso), formatting ? formatting : 'yyyy-MM-dd kk:mm:ss');
};
