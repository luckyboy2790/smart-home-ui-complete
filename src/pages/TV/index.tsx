import TVControllerSection from "./components/TVController/TVControllerSection";
import TVControlsKeyboards from "./components/TVControlsKeyboards/TVControlsKeyboards";
import TVDisplaySelectCard from "./components/TVDisplay/TVDisplaySelectCard";
import TVFavouriteCard from "./components/TVFavourite/TVFavouriteCard";

const TV = () => {
  return (
    <div className="flex 2xl:flex-row flex-col justify-between gap-10 h-auto">
      <div className="2xl:w-1/3 w-full h-full flex flex-col gap-5">
        <TVDisplaySelectCard />
        <TVFavouriteCard />
      </div>
      <div className="2xl:w-1/3 w-full min-w-[480px] h-full">
        <TVControllerSection />
      </div>
      <div className="2xl:w-1/3 w-full h-full">
        <TVControlsKeyboards />
      </div>
    </div>
  );
};

export default TV;
