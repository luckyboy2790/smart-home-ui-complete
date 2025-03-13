import HomeAccessCard from "./components/HomeAccess/HomeAccessCard";
import LightCard from "./components/Lights/LightCard";
import MediaSectionCard from "./components/Media/MediaSectionCard";
import RoomTemp from "./components/RoomTemp/RoomTempCard";
import SecuritySectionCard from "./components/Security/SecuritySectionCard";
import WeatherCard from "./components/WeatherTme/WeatherCard";

const Home = () => {
  return (
    <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10">
      <div className="flex flex-col gap-10 h-[calc(100vh-250px)] min-h-[712px]">
        <div className="w-full h-2/5">
          <WeatherCard />
        </div>
        <div className="w-full h-2/5">
          <LightCard id="dashboard" isOn="on" />
        </div>
        <div className="w-full h-1/5">
          <HomeAccessCard id="home_access" isOn="lock" />
        </div>
      </div>
      <div className="h-[calc(100vh-250px)] min-h-[712px]">
        <RoomTemp currentTemp={68} targetTemp={67} />
      </div>
      <div className="flex flex-col gap-10 h-[calc(100vh-250px)] min-h-[712px]">
        <div className="h-4/5">
          <SecuritySectionCard />
        </div>
        <div className="h-1/5">
          <MediaSectionCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
