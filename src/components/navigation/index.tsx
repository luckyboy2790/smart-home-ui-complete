import { Props } from "../../types";

const Navigation = ({ children }: Props) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 justify-center p-4 bg-white lg:row-start-2 lg:flex lg:flex-col lg:justify-between lg:rounded-none lg:items-end lg:p-0 lg:relative lg:col-span-1 lg:h-full">
      {children}
    </div>
  );
};

Navigation.Nav = function NavigationNav({ children }: Props) {
  return (
    <ul className="flex justify-center w-auto gap-6 lg:flex-col lg:mt-6">
      {children}
    </ul>
  );
};

Navigation.NavItem = function NavigationNavItem({ children }: Props) {
  return <li>{children}</li>;
};

export default Navigation;
