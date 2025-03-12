import { Props } from "../../types";
import { IoMdNotificationsOff, IoMdNotifications } from "react-icons/io";
import { RiVolumeMuteFill, RiVolumeUpFill } from "react-icons/ri";
import { BsThermometerHalf } from "react-icons/bs";
import { useAppContext } from "../../context/AppContext";
import { MdOutlineAcUnit, MdPowerSettingsNew } from "react-icons/md";
import { useState } from "react";

const Header = ({ children }: Props) => {
  return (
    <div className="row-start-1 gap-1 mx-auto bg-dark lg:w-full lg:col-span-full ">
      {children}
    </div>
  );
};

Header.Container = function HeaderContainer({ children }: Props) {
  return (
    <div className="flex items-center justify-between w-11/12 py-5 mx-auto">
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
  const [alarmOn, setAlarmOn] = useState(false);
  const [mute, setMute] = useState(false);
  const [acOn, setAcOn] = useState(false);
  const [tvOn, setTvOn] = useState(true);

  return (
    <div className="flex justify-center gap-6 lg:gap-8 p-4">
      {/* Alarm Toggle */}
      <button
        className={`p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${alarmOn ? "shadow-neon animate-neon-glow" : "hover:shadow-neon-soft"
          }`}
        onClick={() => setAlarmOn(!alarmOn)}
        aria-label="Toggle Alarm"
      >
        {alarmOn ? (
          <IoMdNotifications className="text-3xl text-neon animate-neon-glow-pulse" />
        ) : (
          <IoMdNotificationsOff className="text-3xl text-gray-500" />
        )}
      </button>

      {/* Mute Toggle */}
      <button
        className={`p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${mute ? "shadow-neon animate-neon-glow" : "hover:shadow-neon-soft"
          }`}
        onClick={() => setMute(!mute)}
        aria-label="Toggle Mute"
      >
        {mute ? (
          <RiVolumeMuteFill className="text-3xl text-neon animate-neon-glow-pulse" />
        ) : (
          <RiVolumeUpFill className="text-3xl text-gray-500" />
        )}
      </button>

      {/* Temperature Display (AC Toggle) */}
      <button
        className={`p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${acOn ? "shadow-neon animate-neon-glow" : "hover:shadow-neon-soft"
          }`}
        onClick={() => setAcOn(!acOn)}
        aria-label="Toggle AC"
      >
        {acOn ? (
          <MdOutlineAcUnit className="text-3xl text-neon animate-neon-glow-pulse" />
        ) : (
          <BsThermometerHalf className="text-3xl text-gray-500" />
        )}
      </button>

      {/* TV Toggle */}
      <button
        className={`p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${tvOn ? "shadow-neon animate-neon-glow" : "hover:shadow-neon-soft"
          }`}
        onClick={() => setTvOn(!tvOn)}
        aria-label="Toggle TV Power"
      >
        <MdPowerSettingsNew
          className={`text-3xl ${tvOn ? "text-neon animate-neon-glow-pulse" : "text-gray-500"
            }`}
        />
      </button>
    </div>
  );
}

export default Header;
