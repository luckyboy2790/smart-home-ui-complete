import CameraContent from "./components/CameraContent";

const Camera = () => {
  return (
    <div className="bg-[url(/src/assets/pool_bg.jpg)] lg:h-[calc(100vh-250px)] h-[calc(100vh-285px)] min-h-[550px] bg-cover bg-center">
      <CameraContent />
    </div>
  );
};

export default Camera;
