import { Props } from "../../types";

const Navigation = ({ children }: Props) => {
  return (
    <div className="z-10 fixed bottom-0 max-h-[calc(100vh-68px)] overflow-y-scroll left-0 right-0 justify-center p-4 bg-dark lg:row-start-2 lg:flex lg:flex-col lg:justify-between lg:rounded-none lg:items-end lg:p-0 lg:relative lg:col-span-1 lg:h-full">
      {children}
    </div>
  );
};

Navigation.Nav = function NavigationNav({ children }: Props) {
  return (
    <ul className="w-full flex justify-center gap-6 lg:flex-col lg:mt-6">
      {children}
    </ul>
  );
};

Navigation.NavItem = function NavigationNavItem({ children }: Props) {
  return <li>{children}</li>;
};

export default Navigation;
