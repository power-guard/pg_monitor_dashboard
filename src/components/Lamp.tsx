import * as React from 'react';

interface OwnProps {
  type?: 'default' | 'success' | 'warning' | 'error';
  className?: string;
}

export const lampColors = {
  default: 'bg-gray-200',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
};

export const Lamp = ({ type = 'default', className = '' }: OwnProps) => {
  return <div className={`${lampColors[type]} w-3 h-3 mr-1 rounded-full ${className}`}></div>;
};
