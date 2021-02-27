import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import React, { ReactNode } from 'react';

interface OwnProps {
  children?: ReactNode;
}

export const BaseLayout = ({ children }: OwnProps) => {
  return (
    <div className="bg-warmGray-100">
      <Header />
      <main className="h-full text-sm text-warmGray-900">{children}</main>
      <Footer />
    </div>
  );
};
