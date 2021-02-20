import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import React, { ReactNode } from 'react';

interface OwnProps {
  children?: ReactNode;
}

export const BaseLayout = ({ children }: OwnProps) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
