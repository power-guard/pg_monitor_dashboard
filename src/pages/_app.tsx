import { AppProps } from 'next/app';
import React from 'react';

import 'styles/index.css';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
