import { Props } from "../../types";
import { AiFillLock } from "react-icons/ai";
import { RiTvFill, RiVolumeMuteFill } from "react-icons/ri";
import { FaTemperatureHigh } from "react-icons/fa";

const Header = ({ children }: Props) => {
  return (
    <div className="row-start-1 gap-1 mx-auto bg-dark lg:w-full lg:col-span-full ">
      {children}
    </div>
  );
};

Header.Container = function HeaderContainer({ children }: Props) {
  return (
    <div className="flex items-center justify-end w-11/12 py-5 mx-auto">
      {children}
    </div>
  );
};

Header.Title = function HeaderTitle() {
  return (
    <div className="ml-2 text-4xl transition-colors cursor-pointer lg:text-6xl hover:text-accent lg:mr-2">

    </div>
  );
};

Header.Icons = function HeaderIcons() {
  return (
    <div className="flex justify-center gap-4 lg:gap-6 text-sm lg:text-lg">
      <span className="flex items-center"><AiFillLock className="mr-1" /> Alarm: OFF</span>
      <span className="flex items-center"><RiVolumeMuteFill className="mr-1" /> Mute: OFF</span>
      <span className="flex items-center"><FaTemperatureHigh className="mr-1" /> Temp: 22°C</span>
      <span className="flex items-center"><RiTvFill className="mr-1" /> TV: ON</span>
    </div>
  );
};

export default Header;
