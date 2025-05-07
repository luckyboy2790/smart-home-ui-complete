import { Props } from "../../types";

const Navigation = ({ children }: Props) => {
  return (
    <div className="row-start-1 h-15 col-span-full">
      <div className="fixed md:top-0 top-6 max-[767px]:left-0 md:h-screen md:w-auto w-screen flex flex-col justify-center items-center">
        <div className="z-10 md:w-17 md:max-h-1/2 w-4/5 max-h-14 p-2 rounded-[10000px] overflow-y-scroll justify-center bg-[#2e2e2ed3] shadow-sm shadow-gray-400">
          {children}
        </div>
      </div>
    </div>
  );
};

Navigation.Nav = function NavigationNav({ children }: Props) {
  return (
    <ul className="w-full flex md:justify-center justify-start gap-3 md:flex-col flex-row">
      {children}
    </ul>
  );
};

Navigation.NavItem = function NavigationNavItem({ children }: Props) {
  return <li className="flex justify-center items-center">{children}</li>;
};

export default Navigation;
