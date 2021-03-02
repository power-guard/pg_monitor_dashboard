import React, { ReactNode } from 'react';

interface OwnProps {
  title: ReactNode;
  children?: ReactNode;
  isOpen?: boolean;
  disableHoverListener?: boolean;
}

export const Tooltip = ({ title, children, isOpen = false, disableHoverListener = false }: OwnProps) => {
  return (
    <div className="group relative inline-block">
      {children}
      <div
        className={`opacity-0 ${isOpen ? 'opacity-100' : ''} ${
          disableHoverListener ? '' : 'group-hover:opacity-100'
        } bg-gray-900 text-white text-center text-xs rounded py-1 px-3 z-50 absolute bottom-full left-2/4 transform -translate-x-2/4 pointer-events-none whitespace-nowrap`}
      >
        {title}
        <svg className="text-gray-900 h-2 w-full absolute left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255">
          <polygon className="fill-current" points="0,0 127.5, 127.5 255,0" />
        </svg>
      </div>
    </div>
  );
};
