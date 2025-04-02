import arrowUrl from "/src/assets/arrow.png";

const CameraControllerSection = () => {
  return (
    <div className="h-full grow flex flex-col justify-center items-center gap-5">
      <div className="w-fit flex flex-col gap-5 items-center">
        <div className="cursor-pointer flex justify-center items-center">
          <div className="sm:w-36 sm:h-36 w-24 h-24 opacity-45 text-gray-300 duration-200 hover:scale-130 active:scale-110 flex justify-center items-center rotate-90">
            <img src={arrowUrl} alt="top_arrow" />
          </div>
        </div>
        <div className="cursor-pointer flex justify-center items-center gap-5">
          <div className="sm:w-36 sm:h-36 w-24 h-24 opacity-45 text-gray-300 duration-200 hover:scale-130 active:scale-110 flex justify-center items-center">
            <img src={arrowUrl} alt="top_arrow" />
          </div>
          <div className="sm:h-44 sm:w-44 w-28 h-28 flex justify-center items-center border border-gray-300 rounded-full  duration-200 hover:scale-120 active:scale-105">
            <div className="sm:h-24 sm:w-24 h-16 w-16 border-dashed border border-gray-300 rounded-full"></div>
          </div>
          <div className="sm:w-36 sm:h-36 w-24 h-24 opacity-45 text-gray-300 duration-200 hover:scale-130 active:scale-110 flex justify-center items-center rotate-180">
            <img src={arrowUrl} alt="top_arrow" />
          </div>
        </div>
        <div className="cursor-pointer flex justify-center items-center">
          <div className="sm:w-36 sm:h-36 w-24 h-24 opacity-45 text-gray-300 duration-200 hover:scale-130 active:scale-110 flex justify-center items-center rotate-270">
            <img src={arrowUrl} alt="top_arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraControllerSection;
