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
        <div className="p-10 text-2xl cursor-pointer duration-200 hover:scale-125 active:scale-100 ">
          <MdFastRewind />
        </div>

        <div className="mx-3 h-[104px] w-[1px] bg-gray-600"></div>

        <div className="p-10 text-2xl cursor-pointer duration-200 hover:scale-125 active:scale-100">
          <MdPlayArrow />
        </div>

        <div className="mx-3 h-[104px] w-[1px] bg-gray-600"></div>

        <div className="p-10 text-2xl cursor-pointer duration-200 hover:scale-125 active:scale-100">
          <MdFastForward />
        </div>
      </div>

      <div className="flex justify-center items-center my-3">
        <div className="w-[104px] h-[1px] bg-gray-600"></div>
        <div className="mx-3"></div>
        <div className="w-[104px] h-[1px] bg-gray-600"></div>
        <div className="mx-3"></div>
        <div className="w-[104px] h-[1px] bg-gray-600"></div>
      </div>

      <div className="flex justify-center items-center">
        <div className="p-10 text-2xl cursor-pointer duration-200 hover:scale-125 active:scale-100 ">
          <MdSkipPrevious />
        </div>

        <div className="mx-3 h-[104px] w-[1px] bg-gray-600"></div>

        <div className="p-10 text-2xl cursor-pointer duration-200 hover:scale-125 active:scale-100">
          <MdPause />
        </div>

        <div className="mx-3 h-[104px] w-[1px] bg-gray-600"></div>

        <div className="p-10 text-2xl cursor-pointer duration-200 hover:scale-125 active:scale-100">
          <MdSkipNext />
        </div>
      </div>

      <div className="flex justify-center items-center my-3">
        <div className="w-[104px] h-[1px] bg-gray-600"></div>
        <div className="mx-3"></div>
        <div className="w-[104px] h-[1px] bg-gray-600"></div>
        <div className="mx-3"></div>
        <div className="w-[104px] h-[1px] bg-gray-600"></div>
      </div>

      <div className="flex justify-center items-center">
        <div className="p-10 text-2xl cursor-pointer duration-200 hover:scale-125 active:scale-100 ">
          <MdStop />
        </div>

        <div className="mx-3 h-[104px] w-[1px] bg-gray-600"></div>

        <div className="p-10 text-2xl cursor-pointer duration-200 hover:scale-125 active:scale-100">
          <p className="text-xs font-sans">LIVE</p>
        </div>

        <div className="mx-3 h-[104px] w-[1px] bg-gray-600"></div>

        <div className="p-10 text-2xl cursor-pointer duration-200 hover:scale-125 active:scale-100 text-[#f54b73]">
          <PiRecordFill />
        </div>
      </div>
    </div>
  );
};

export default TVControlsSection;
