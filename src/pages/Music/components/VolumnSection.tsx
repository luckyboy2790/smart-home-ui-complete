import ShareCard from "./ShareCards";
import VolumnSliderSection from "./VolumnSliderSection";

const ShareCardData = [
  {
    RoomName: "Living Room",
    isShared: false,
    isOn: true,
  },
  {
    RoomName: "Great Room",
    isShared: true,
    isOn: true,
  },
  {
    RoomName: "Kitchen",
    isShared: false,
    isOn: false,
  },
  {
    RoomName: "Master Bedroom",
    isShared: true,
    isOn: false,
  },
  {
    RoomName: "Kitchen",
    isShared: false,
    isOn: false,
  },
  {
    RoomName: "Master Bedroom",
    isShared: true,
    isOn: false,
  },
];

const VolumnSection = () => {
  return (
    <div className="RoomSection min-h-[600px] w-full bg-[#bfbfbfd1] rounded-2xl relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,183,255,0.5)]">
      <div className="card-content h-[calc(100vh-250px)] min-h-[600px] p-4 relative z-10 flex flex-col gap-5">
        <VolumnSliderSection />
        <div className="flex flex-col gap-3 p-2 overflow-y-auto">
          {ShareCardData.map((item, index) => (
            <ShareCard
              key={index}
              RoomName={item.RoomName}
              isShared={item.isShared}
              isOn={item.isOn}
              groupName={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolumnSection;
