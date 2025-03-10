import { BsFilePerson } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { Props } from "../../types";

const Header = ({ children }: Props) => {
  return (
    <div className="row-start-1 gap-1 mx-auto text-white bg-bgDark lg:w-full lg:col-span-full ">
      {children}
    </div>
  );
};

Header.Container = function HeaderContainer({ children }: Props) {
  return (
    <div className="flex items-center justify-end w-11/12 py-2 mx-auto lg:w-full">
      {children}
    </div>
  );
};

Header.Title = function HeaderTitle() {
  return (
    <div className="ml-2 text-4xl transition-colors cursor-pointer lg:text-6xl hover:text-accent lg:mr-2">
      <BsFilePerson />
    </div>
  );
};

Header.Icons = function HeaderIcons() {
  return (
    <div className="flex flex-col items-end justify-center ">
      <h2 className="font-bold lg:text-md">Alicia</h2>
      <div className="flex">
        <FiMapPin />
        <span className="ml-2 text-sm lg:text-base ">Nashville, Tennessee</span>
      </div>
    </div>
  );
};

export default Header;
