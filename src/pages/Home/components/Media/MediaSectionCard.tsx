import MediaTVSelect from "./MediaTVSelect";
import MediaVolumnSlide from "./MediaVolumnSlide";

const MediaSectionCard = () => {
  return (
    <div className="group h-full w-full relative flex flex-col rounded-xl bg-slate-950 p-4 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
      <div className="absolute inset-px rounded-[11px] bg-slate-950" />
      <div className="relative flex flex-col justify-between items-center w-full h-full gap-5">
        <div className=" w-full flex items-center justify-between">
          <h3 className="text-base font-semibold text-white 2xl:text-xl text-start">
            Media
          </h3>
          <div className="text-sm text-start text-white">
            <MediaTVSelect />
          </div>
        </div>
        <div className="w-full">
          <MediaVolumnSlide />
        </div>
      </div>
    </div>
  );
};

export default MediaSectionCard;
