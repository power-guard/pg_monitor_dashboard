declare global {
  //eslint-disable-next-line no-unused-vars
  namespace NodeJS {
    //eslint-disable-next-line no-unused-vars
    interface ProcessEnv {
      NEXT_PUBLIC_API_BASE_URL: string;
      NEXT_PUBLIC_FETCH_MOCK_DATA: string; // true  | false
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {};
