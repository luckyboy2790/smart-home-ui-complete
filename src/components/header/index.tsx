import { Props } from "../../types";
import { IoMdNotificationsOff, IoMdNotifications } from "react-icons/io";
import { RiVolumeMuteFill, RiVolumeUpFill } from "react-icons/ri";
import { BsThermometerHalf } from "react-icons/bs";
import { useAppContext } from "../../context/AppContext";
import { MdOutlineAcUnit, MdPowerSettingsNew } from "react-icons/md";
import { useState } from "react";

const Header = ({ children }: Props) => {
  return (
    <div className="row-start-1 gap-1 mx-auto bg-[#b8b5b57a] lg:w-full lg:col-span-full z-1">
      {children}
    </div>
  );
};

Header.Container = function HeaderContainer({ children }: Props) {
  return (
    <div className="flex items-center justify-between w-11/12 mx-auto">
      {children}
    </div>
  );
};

Header.Title = function HeaderTitle() {
  const { title } = useAppContext();
  return (
    <div className="ml-2 text-2xl lg:text-4xl shadow-neon-text-glow animate-glow-pulse font-bold">
      {title}
    </div>
  );
};

Header.Icons = function HeaderIcons() {
  const { alarmStatus, setAlarmStatus } = useAppContext();
  const [mute, setMute] = useState(false);
  const [acOn, setAcOn] = useState(false);
  const [tvOn, setTvOn] = useState(true);

  return (
    <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8 p-2 sm:p-3 lg:p-4">
      {/* Alarm Toggle */}
      <button
        className={`p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
          alarmStatus
            ? "shadow-neon animate-neon-glow"
            : "hover:shadow-neon-soft"
        }`}
        onClick={() => setAlarmStatus(!alarmStatus)}
        aria-label="Toggle Alarm"
      >
        {alarmStatus ? (
          <IoMdNotifications className="text-xl sm:text-2xl lg:text-3xl text-neon animate-neon-glow-pulse" />
        ) : (
          <IoMdNotificationsOff className="text-xl sm:text-2xl lg:text-3xl text-gray-700" />
        )}
      </button>

      {/* Mute Toggle */}
      <button
        className={`p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
          mute ? "shadow-neon animate-neon-glow" : "hover:shadow-neon-soft"
        }`}
        onClick={() => setMute(!mute)}
        aria-label="Toggle Mute"
      >
        {mute ? (
          <RiVolumeMuteFill className="text-xl sm:text-2xl lg:text-3xl text-neon animate-neon-glow-pulse" />
        ) : (
          <RiVolumeUpFill className="text-xl sm:text-2xl lg:text-3xl text-gray-700" />
        )}
      </button>

      {/* AC Toggle */}
      <button
        className={`p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
          acOn ? "shadow-neon animate-neon-glow" : "hover:shadow-neon-soft"
        }`}
        onClick={() => setAcOn(!acOn)}
        aria-label="Toggle AC"
      >
        {acOn ? (
          <MdOutlineAcUnit className="text-xl sm:text-2xl lg:text-3xl text-neon animate-neon-glow-pulse" />
        ) : (
          <BsThermometerHalf className="text-xl sm:text-2xl lg:text-3xl text-gray-700" />
        )}
      </button>

      {/* TV Toggle */}
      <button
        className={`p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
          tvOn ? "shadow-neon animate-neon-glow" : "hover:shadow-neon-soft"
        }`}
        onClick={() => setTvOn(!tvOn)}
        aria-label="Toggle TV Power"
      >
        <MdPowerSettingsNew
          className={`text-xl sm:text-2xl lg:text-3xl ${
            tvOn ? "text-neon animate-neon-glow-pulse" : "text-gray-700"
          }`}
        />
      </button>
    </div>
  );
};

export default Header;
