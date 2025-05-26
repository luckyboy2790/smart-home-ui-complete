import { useState, useEffect } from "react";
import CameraControllerSection from "./CameraControllerSection";
import CameraSelect from "./CameraSelectSection";
import CameraZoomSection from "./CameraZoomSection";

const AUTO_HIDE_DELAY = 5000; // 5 seconds

const CameraContent = () => {
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (showControls) {
      timeout = setTimeout(() => {
        setShowControls(false);
      }, AUTO_HIDE_DELAY);
    }

    return () => {
      clearTimeout(timeout); // Cleanup on unmount or re-show
    };
  }, [showControls]);

  const handleToggleControls = () => {
    setShowControls(true);
  };

  return (
    <div
      className="w-full h-full overflow-auto flex lg:flex-row flex-col justify-between items-center relative"
      onClick={handleToggleControls}
    >
      <CameraSelect />

      <div className="grow h-full relative">
        <div
          className={`absolute inset-0 transition-opacity duration-500 delay-100 ${
            showControls
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <CameraControllerSection />
        </div>
      </div>

      <div
        className={`transition-opacity duration-500 delay-100 ${
          showControls
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <CameraZoomSection />
      </div>
    </div>
  );
};

export default CameraContent;
