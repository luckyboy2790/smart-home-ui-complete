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
    <div className="group relative flex flex-col rounded-xl bg-slate-950 p-4 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
      <div className="absolute inset-px rounded-[11px] bg-slate-950" />
      <div className="relative flex flex-col gap-5">
        <div className="w-full flex justify-center items-center">
          <h3 className="text-base text-center">{RoomName}</h3>
        </div>
        <div className="flex justify-center items-center gap-5 relative">
          <SharingCheckbox isShared={isShared} groupName={groupName} />
          <PowerCheckbox isOn={isOn} groupName={groupName} />
        </div>
        <div className="absolute right-0 top-2 z-10">
          <ZoneVolumeSlider />
        </div>
      </div>
    </div>
  );
};

export default ShareCard;
