import {
  MdFastRewind,
  MdPlayArrow,
  MdFastForward,
  MdSkipPrevious,
  MdPause,
  MdSkipNext,
  MdStop,
} from "react-icons/md";
import { PiRecordFill } from "react-icons/pi";

const TVControlsSection = () => {
  return (
    <div className="flex flex-col text-white">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center sm:p-10 min-[428px]:p-8 min-h-[74px] min-w-[74px] p-6 text-2xl cursor-pointer duration-200 hover:scale-125 active:scale-100 ">
          <MdFastRewind />
        </div>

        <div className="mx-3 sm:h-[104px] min-[428px]:h-[88px] h-[74px] min-h-[74px] w-[1px] bg-gray-600"></div>

        <div className="flex justify-center items-center sm:p-10 min-[428px]:p-8 min-h-[74px] min-w-[74px] p-6 text-2xl cursor-pointer duration-200 hover:scale-125 active:scale-100">
          <MdPlayArrow />
        </div>

        <div className="mx-3 sm:h-[104px] min-[428px]:h-[88px] h-[74px] min-h-[74px] w-[1px] bg-gray-600"></div>

        <div className="flex justify-center items-center sm:p-10 min-[428px]:p-8 min-h-[74px] min-w-[74px] p-6 text-2xl cursor-pointer duration-200 hover:scale-125 active:scale-100">
          <MdFastForward />
        </div>
      </div>

      <div className="flex justify-center items-center my-3">
        <div className="sm:w-[104px] min-[428px]:w-[88px] w-[74px] h-[1px] bg-gray-600"></div>
        <div className="mx-3"></div>
        <div className="sm:w-[104px] min-[428px]:w-[88px] w-[74px] h-[1px] bg-gray-600"></div>
        <div className="mx-3"></div>
        <div className="sm:w-[104px] min-[428px]:w-[88px] w-[74px] h-[1px] bg-gray-600"></div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center sm:p-10 min-[428px]:p-8 min-h-[74px] min-w-[74px] p-6 text-2xl cursor-pointer duration-200 hover:scale-125 active:scale-100 ">
          <MdSkipPrevious />
        </div>

        <div className="mx-3 sm:h-[104px] min-[428px]:h-[88px] h-[74px] min-h-[74px] w-[1px] bg-gray-600"></div>

        <div className="flex justify-center items-center sm:p-10 min-[428px]:p-8 min-h-[74px] min-w-[74px] p-6 text-2xl cursor-pointer duration-200 hover:scale-125 active:scale-100">
          <MdPause />
        </div>

        <div className="mx-3 sm:h-[104px] min-[428px]:h-[88px] h-[74px] min-h-[74px] w-[1px] bg-gray-600"></div>

        <div className="flex justify-center items-center sm:p-10 min-[428px]:p-8 min-h-[74px] min-w-[74px] p-6 text-2xl cursor-pointer duration-200 hover:scale-125 active:scale-100">
          <MdSkipNext />
        </div>
      </div>

      <div className="flex justify-center items-center my-3">
        <div className="sm:w-[104px] min-[428px]:w-[88px] w-[74px] h-[1px] bg-gray-600"></div>
        <div className="mx-3"></div>
        <div className="sm:w-[104px] min-[428px]:w-[88px] w-[74px] h-[1px] bg-gray-600"></div>
        <div className="mx-3"></div>
        <div className="sm:w-[104px] min-[428px]:w-[88px] w-[74px] h-[1px] bg-gray-600"></div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center sm:p-10 min-[428px]:p-8 min-h-[74px] min-w-[74px] p-6 text-2xl cursor-pointer duration-200 hover:scale-125 active:scale-100 ">
          <MdStop />
        </div>

        <div className="mx-3 sm:h-[104px] min-[428px]:h-[88px] h-[74px] min-h-[74px] w-[1px] bg-gray-600"></div>

        <div className="flex justify-center items-center sm:p-10 min-[428px]:p-8 min-h-[74px] min-w-[74px] p-6 text-2xl cursor-pointer duration-200 hover:scale-125 active:scale-100">
          <p className="text-xs font-sans">LIVE</p>
        </div>

        <div className="mx-3 sm:h-[104px] min-[428px]:h-[88px] h-[74px] min-h-[74px] w-[1px] bg-gray-600"></div>

        <div className="flex justify-center items-center sm:p-10 min-[428px]:p-8 min-h-[74px] min-w-[74px] p-6 text-2xl cursor-pointer duration-200 hover:scale-125 active:scale-100 text-[#f54b73]">
          <PiRecordFill />
        </div>
      </div>
    </div>
  );
};

export default TVControlsSection;
