import TVControllerButton from "./TVControllerButton";

const TVControllerGroup = () => {
  return (
    <div className="w-full flex justify-center items-center grow min-h-[458px] overflow-hidden">
      <div className="sm:w-[450px] w-[340px] sm:h-[450px] h-[380px] min-w-84 relative flex justify-center items-center">
        <div className="absolute top-15 w-full flex justify-center items-center">
          <TVControllerButton />
        </div>
        <div className="absolute left-0 flex justify-center items-center rotate-270">
          <TVControllerButton />
        </div>
        <div className="absolute right-0 flex justify-center items-center rotate-90">
          <TVControllerButton />
        </div>
        <div className="absolute bottom-15 w-full flex justify-center items-center rotate-180">
          <TVControllerButton />
        </div>

        <div className="bg-[#4d4d4d] sm:w-30 w-24 sm:h-30 h-24 rounded-full text-xs text-white flex items-center justify-center uppercase duration-200 active:scale-90 cursor-pointer">
          select
        </div>
      </div>
    </div>
  );
};

export default TVControllerGroup;
