import { FC } from 'react';
import { useToDo } from '@components/context/context';

const Layout: FC = ({ children }) => {
  return (
    <div className="h-screen w-full flex items-center flex-col justify-center space-y-4">
      <h1 className="font-bold text-5xl text- ">To Do App</h1>
      <main className="relative w-1/2 mx-auto px-6">{children}</main>
    </div>
  );
};

export default Layout;
