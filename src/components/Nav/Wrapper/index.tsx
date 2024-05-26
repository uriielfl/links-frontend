import { ReactNode } from 'react';

interface IWrapper {
  children: ReactNode;
}

export const Wrapper = ({ children }: IWrapper) => {
  return (
    <div className="bg-white sticky top-0 left-0 z-20 w-full p-4 flex justify-between items-center shadow-lg">
      {children}
    </div>
  );
};
