import { ReactNode } from 'react';

interface IWrapper {
  children: ReactNode;
}
export const Wrapper = ({ children }: IWrapper) => {
  return (
    <div className="flex gap-8 items-center justify-around flex-wrap w-full">
      <>{children}</>
    </div>
  );
};
