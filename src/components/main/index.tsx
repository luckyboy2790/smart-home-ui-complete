import { Props } from "../../types";

const Main = ({ children }: Props) => {
  return (
    <div className="min-w-full py-6 z-2 max-h-[calc(100vh-177px)] overflow-y-scroll row-start-2 justify-start flex flex-col md:col-start-2 col-start-1 backdrop-blur col-span-full text-xl h-screen px-8 bg-[#4854638c] rounded-xl">
      {children}
    </div>
  );
};

Main.Container = function mainContainer({ children }: Props) {
  return <div className="w-full gap-4">{children}</div>;
};

export default Main;
