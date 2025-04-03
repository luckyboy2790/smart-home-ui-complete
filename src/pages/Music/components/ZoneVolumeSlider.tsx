import { useState } from "react";
import { IoVolumeMute, IoVolumeMedium } from "react-icons/io5";

const ZoneVolumeSlider = () => {
  const [volumnVal, setVolumnVal] = useState<number>(50);
  return (
    <div className="w-full flex justify-center items-center px-2 gap-3">
      <input
        type="range"
        min={0}
        max={100}
        defaultValue={volumnVal}
        onChange={(e) => setVolumnVal(Number(e.target.value))}
        className="w-full h-1 bg-white rounded-full"
      />
      {volumnVal > 0 ? (
        <IoVolumeMute
          className="cursor-pointer text-xl text-blue-500"
          onClick={() => setVolumnVal(0)}
        />
      ) : (
        <IoVolumeMedium
          className="cursor-pointer text-xl text-blue-500"
          onClick={() => setVolumnVal(100)}
        />
      )}
    </div>
  );
};

export default ZoneVolumeSlider;
