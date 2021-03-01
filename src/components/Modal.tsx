import { useClickOutsideListenerRef } from 'hooks/useClickOutsideListenerRef';
import React, { ReactNode } from 'react';

interface OwnProps {
  onClose: () => void;
  children?: ReactNode;
}

export const Modal = ({ children, onClose }: OwnProps) => {
  const ref = useClickOutsideListenerRef(onClose);

  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div ref={ref} className="relative w-auto mx-auto my-6 max-w-8xl">
          {children}
        </div>
      </div>
      <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
