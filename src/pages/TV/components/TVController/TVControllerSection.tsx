import TVControllerVideoSourceOption from "./TVControllerVideoSourceOption";
import TVControllerVideoOption from "./TVControllerVideoOption";
import TVControllerVideoVolumnSlider from "./TVControllerVideoVolumnSlider";
import TVControllerGroup from "./TVControllerGroup";
import TVControllerButtonGroup from "./TVControllerButtonGroup";

const TVControllerSection = () => {
  return (
    <div className="group relative flex flex-col rounded-xl bg-slate-950 p-4 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20 ">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
      <div className="absolute inset-px rounded-[11px] bg-slate-950" />
      <div className="relative flex flex-col gap-1">
        <div className="flex flex-col gap-1">
          <div className="w-full flex justify-between">
            <p className="text-base uppercase text-white flex gap-3 items-center">
              Video source
            </p>
            <TVControllerVideoSourceOption />
          </div>
          <div>
            <TVControllerVideoOption />
          </div>
        </div>
        <div>
          <TVControllerVideoVolumnSlider />
        </div>
        <div>
          <TVControllerGroup />
        </div>
        <div>
          <TVControllerButtonGroup />
        </div>
      </div>
    </div>
  );
};

export default TVControllerSection;
