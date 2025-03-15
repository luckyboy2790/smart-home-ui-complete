import { MdStop } from "react-icons/md";
import { PiRecordFill } from "react-icons/pi";

const TVKeyboardsSection = () => {
  return (
    <div className="flex flex-col text-white">
      <div className="flex justify-center items-center">
        <div className="p-12 text-lg cursor-pointer duration-200 hover:scale-125 active:scale-100 ">
          1
        </div>

        <div className="mx-3 h-[116px] w-[1px] bg-gray-600"></div>

        <div className="p-12 text-lg cursor-pointer duration-200 hover:scale-125 active:scale-100">
          2
        </div>

        <div className="mx-3 h-[116px] w-[1px] bg-gray-600"></div>

        <div className="p-12 text-lg cursor-pointer duration-200 hover:scale-125 active:scale-100">
          3
        </div>
      </div>

      <div className="flex justify-center items-center my-3">
        <div className="w-[116px] h-[1px] bg-gray-600"></div>
        <div className="mx-3"></div>
        <div className="w-[116px] h-[1px] bg-gray-600"></div>
        <div className="mx-3"></div>
        <div className="w-[116px] h-[1px] bg-gray-600"></div>
      </div>

      <div className="flex justify-center items-center">
        <div className="p-12 text-lg cursor-pointer duration-200 hover:scale-125 active:scale-100 ">
          4
        </div>

        <div className="mx-3 h-[116px] w-[1px] bg-gray-600"></div>

        <div className="p-12 text-lg cursor-pointer duration-200 hover:scale-125 active:scale-100">
          5
        </div>

        <div className="mx-3 h-[116px] w-[1px] bg-gray-600"></div>

        <div className="p-12 text-lg cursor-pointer duration-200 hover:scale-125 active:scale-100">
          6
        </div>
      </div>

      <div className="flex justify-center items-center my-3">
        <div className="w-[116px] h-[1px] bg-gray-600"></div>
        <div className="mx-3"></div>
        <div className="w-[116px] h-[1px] bg-gray-600"></div>
        <div className="mx-3"></div>
        <div className="w-[116px] h-[1px] bg-gray-600"></div>
      </div>

      <div className="flex justify-center items-center">
        <div className="p-12 text-lg cursor-pointer duration-200 hover:scale-125 active:scale-100 ">
          7
        </div>

        <div className="mx-3 h-[116px] w-[1px] bg-gray-600"></div>

        <div className="p-12 text-lg cursor-pointer duration-200 hover:scale-125 active:scale-100">
          8
        </div>

        <div className="mx-3 h-[116px] w-[1px] bg-gray-600"></div>

        <div className="p-12 text-lg cursor-pointer duration-200 hover:scale-125 active:scale-100">
          9
        </div>
      </div>

      <div className="flex justify-center items-center my-3">
        <div className="w-[116px] h-[1px] bg-gray-600"></div>
        <div className="mx-3"></div>
        <div className="w-[116px] h-[1px] bg-gray-600"></div>
        <div className="mx-3"></div>
        <div className="w-[116px] h-[1px] bg-gray-600"></div>
      </div>

      <div className="flex justify-center items-center">
        <div className="p-12 text-lg cursor-pointer duration-200 hover:scale-125 active:scale-100 ">
          <MdStop />
        </div>

        <div className="mx-3 h-[116px] w-[1px] bg-gray-600"></div>

        <div className="p-12 text-lg cursor-pointer duration-200 hover:scale-125 active:scale-100">
          <p className="font-sans">0</p>
        </div>

        <div className="mx-3 h-[116px] w-[1px] bg-gray-600"></div>

        <div className="p-12 text-lg cursor-pointer duration-200 hover:scale-125 active:scale-100 text-[#f54b73]">
          <PiRecordFill />
        </div>
      </div>
    </div>
  );
};

export default TVKeyboardsSection;
