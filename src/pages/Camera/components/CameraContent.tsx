import CameraControllerSection from "./CameraControllerSection";
import CameraSelect from "./CameraSelectSection";
import CameraZoomSection from "./CameraZoomSection";

const CameraContent = () => {
  return (
    <div className="w-full h-full overflow-auto bg-[#1b1b1bb0] flex lg:flex-row flex-col justify-between items-center relative">
      <CameraSelect />
      <div className="grow h-full absolute lg:relative lg:top-0 lg:left-0">
        <CameraControllerSection />
      </div>
      <CameraZoomSection />
    </div>
  );
};

export default CameraContent;
