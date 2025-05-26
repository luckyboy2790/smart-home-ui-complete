import { BsSun, BsSnow2, BsPower } from "react-icons/bs";
import { BiSolidLeaf } from "react-icons/bi";
import classNames from "classnames";
import { useState } from "react";

type TagLabel = "auto" | "off" | "cool" | "heat";

const Tag = ({ label = "auto" }: { label: TagLabel }) => {
  const statusStyles = {
    auto: "border-green-300 text-green-300",
    off: "border-gray-400 text-gray-400",
    cool: "border-blue-400 text-blue-400",
    heat: "border-red-400 text-red-400",
  };

  return (
    <div
      className={classNames(
        "px-4 py-1 flex justify-center items-center border-2 rounded-md bg-[#383a3f] text-sm font-semibold tracking-wider shadow-lg",
        statusStyles[label] || "border-gray-500 text-gray-400"
      )}
    >
      <p className="uppercase">{label}</p>
    </div>
  );
};

const TempListItemCard = ({
  tempStatus,
  itemName,
  currentTemp,
}: {
  tempStatus: TagLabel;
  itemName: string;
  currentTemp: number;
}) => {
  const [tagStatus, setTagStatus] = useState<TagLabel>(tempStatus);
  return (
    <button className="group relative">
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r opacity-20 blur-xl transition-all duration-500 group-hover:opacity-50 group-hover:blur-2xl" />
      <div className="relative flex lg:flex-row flex-col items-center gap-2 rounded-xl border border-[#777777] bg-[#7a7a7a] pr-4 py-1 px-5">
        <div className="lg:w-2/5 w-full flex lg:justify-start justify-center items-center gap-3 lg:py-0 py-4">
          <Tag label={tagStatus} />
          <p className="text-sm uppercase">{itemName}</p>
        </div>
        <div className="lg:w-1/5 w-full grow flex flex-col items-center justify-between gap-2 py-3">
          <p className="text-xs">CURRENT TEMP</p>
          <h6 className="text-4xl">{currentTemp}</h6>
        </div>
        <div className="lg:w-2/5 w-full flex lg:justify-end justify-center gap-5">
          <div
            className="flex justify-center items-center py-4 text-2xl text-neutral-700 cursor-pointer"
            onClick={() => setTagStatus("off")}
          >
            <BsPower />
          </div>
          <div
            className="flex justify-center items-center py-4 text-2xl text-red-500 cursor-pointer"
            onClick={() => setTagStatus("heat")}
          >
            <BsSun />
          </div>
          <div
            className="flex justify-center items-center py-4 text-2xl text-blue-500 cursor-pointer"
            onClick={() => setTagStatus("cool")}
          >
            <BsSnow2 />
          </div>
          <div
            className="flex justify-center items-center py-4 text-2xl text-emerald-500 cursor-pointer"
            onClick={() => setTagStatus("auto")}
          >
            <BiSolidLeaf />
          </div>
        </div>
      </div>
    </button>
  );
};

export default TempListItemCard;
