declare global {
  //eslint-disable-next-line no-unused-vars
  namespace NodeJS {
    //eslint-disable-next-line no-unused-vars
    interface ProcessEnv {
      API_BASE_URL: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {};
