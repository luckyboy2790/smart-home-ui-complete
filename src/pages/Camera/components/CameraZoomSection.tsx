import { useState, useRef } from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

const CameraZoomSection = () => {
  const [zoomValue, setZoomValue] = useState<number>(50);
  const zoomInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const startZoomChange = (increment: boolean) => {
    stopZoomChange();
    zoomInterval.current = setInterval(() => {
      setZoomValue((prevZoom) => {
        const newZoom = increment ? prevZoom + 1 : prevZoom - 1;
        return Math.min(100, Math.max(0, newZoom));
      });
    }, 100);
  };

  const stopZoomChange = () => {
    if (zoomInterval.current) {
      clearInterval(zoomInterval.current);
      zoomInterval.current = null;
    }
  };

  return (
    <div className="p-4 absolute lg:relative md:w-48 w-full md:h-full h-24 bottom-0 right-0 flex flex-col justify-center items-center gap-4 overflow-hidden">
      <p className="text-xl text-white">Zoom</p>

      <div className="flex md:flex-col flex-row justify-center items-center gap-4">
        <FiPlusCircle
          className="text-xl text-white cursor-pointer duration-200 hover:scale-125 active:scale-100"
          onMouseDown={() => startZoomChange(true)}
          onMouseUp={stopZoomChange}
          onMouseLeave={stopZoomChange}
        />

        <div className="md:h-80 flex justify-center items-center relative">
          <input
            type="range"
            min="0"
            max="100"
            value={zoomValue}
            onChange={(e) => setZoomValue(Number(e.target.value))}
            className="appearance-none md:rotate-[-90deg] w-80 h-[1px] bg-white rounded-lg cursor-pointer accent-white"
          />
        </div>

        <FiMinusCircle
          className="text-xl text-white cursor-pointer duration-200 hover:scale-125 active:scale-100"
          onMouseDown={() => startZoomChange(false)}
          onMouseUp={stopZoomChange}
          onMouseLeave={stopZoomChange}
        />
      </div>
    </div>
  );
};

export default CameraZoomSection;
