import CameraControllerSection from "./CameraControllerSection";
import CameraSelect from "./CameraSelectSection";
import CameraZoomSection from "./CameraZoomSection";

const CameraContent = () => {
  return (
    <div className="w-full h-full overflow-auto bg-[#1b1b1bb0] flex lg:flex-row flex-col justify-between items-center relative group">
      <CameraSelect />

      <div className="grow h-full relative">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 pointer-events-none group-hover:pointer-events-auto">
          <CameraControllerSection />
        </div>
      </div>

      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 pointer-events-none group-hover:pointer-events-auto">
        <CameraZoomSection />
      </div>
    </div>
  );
};

export default CameraContent;
