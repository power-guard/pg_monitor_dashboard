import NextHead from 'next/head';
import React from 'react';
import { getStaticFilePath } from 'utils/environmentUtils';

interface OwnProps {
  title?: string;
  description?: string;
}

export const Head = ({ title, description }: OwnProps) => (
  <NextHead>
    <title>{title || 'Power Guard Monitor'}</title>
    <meta name="description" content={description || 'Power Guard Plant Monitoring Site'} />
    <link rel="icon" href={getStaticFilePath('/favicon.ico')} />
  </NextHead>
);
