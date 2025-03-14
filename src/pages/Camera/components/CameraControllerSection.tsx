import arrowUrl from "/src/assets/arrow.png";

const CameraControllerSection = () => {
  return (
    <div className="h-full grow flex flex-col justify-center items-center gap-5">
      <div className="w-fit flex flex-col gap-5 items-center">
        <div className="cursor-pointer flex justify-center items-center">
          <div className="w-36 h-36 opacity-45 text-gray-300 duration-200 hover:scale-130 active:scale-110 flex justify-center items-center rotate-90">
            <img src={arrowUrl} alt="top_arrow" />
          </div>
        </div>
        <div className="cursor-pointer flex justify-center items-center gap-5">
          <div className="w-36 h-36 opacity-45 text-gray-300 duration-200 hover:scale-130 active:scale-110 flex justify-center items-center">
            <img src={arrowUrl} alt="top_arrow" />
          </div>
          <div className="h-44 w-44 flex justify-center items-center border border-gray-300 rounded-full  duration-200 hover:scale-120 active:scale-105">
            <div className="h-24 w-24 border-dashed border border-gray-300 rounded-full"></div>
          </div>
          <div className="w-36 h-36 opacity-45 text-gray-300 duration-200 hover:scale-130 active:scale-110 flex justify-center items-center rotate-180">
            <img src={arrowUrl} alt="top_arrow" />
          </div>
        </div>
        <div className="cursor-pointer flex justify-center items-center">
          <div className="w-36 h-36 opacity-45 text-gray-300 duration-200 hover:scale-130 active:scale-110 flex justify-center items-center rotate-270">
            <img src={arrowUrl} alt="top_arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraControllerSection;
