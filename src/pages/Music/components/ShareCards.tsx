import PowerCheckbox from "./PowerCheckbox";
import SharingCheckbox from "./SharingCheckbox";
import ZoneVolumeSlider from "./ZoneVolumeSlider";

const ShareCard = ({
  RoomName,
  isOn,
  isShared,
  groupName,
}: {
  RoomName: string;
  isOn: boolean;
  isShared: boolean;
  groupName: number;
}) => {
  return (
    <div className="group relative flex flex-col rounded-xl bg-[#4f4f4fc7] p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
      <div className="absolute inset-px rounded-[11px]" />
      <div className="relative flex flex-col gap-5">
        <div className="w-full flex justify-center items-center">
          <h3 className="text-base text-center">{RoomName}</h3>
        </div>
        <div className="flex justify-center items-center gap-5 relative">
          <SharingCheckbox isShared={isShared} groupName={groupName} />
          <PowerCheckbox isOn={isOn} groupName={groupName} />
        </div>
        <div className="w-full">
          <ZoneVolumeSlider />
        </div>
      </div>
    </div>
  );
};

export default ShareCard;
