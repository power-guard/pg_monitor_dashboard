import { AppProps } from 'next/app';
import 'styles/globals.css';
import React from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
