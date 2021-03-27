export const getStaticFilePath = (path: string): string => {
  return process.env.NODE_ENV === 'production' ? `/dashboard${path}` : path;
};
