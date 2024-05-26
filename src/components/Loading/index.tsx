import { Spinner } from '@material-tailwind/react';

export const Loading = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10 h-full bg-white flex items-center justify-center">
      <Spinner className="h-12 w-12" />
    </div>
  );
};
