import { Props } from "../types";

const AppLayout = ({ children }: Props) => {
  return (
    <div className="w-full mx-auto h-screen justify-center grid grid-cols-8 xl:grid-cols-14 lg:grid-cols-10 2xl:grid-cols-16">
      {children}
    </div>
  );
};

export default AppLayout;
