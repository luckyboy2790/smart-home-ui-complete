import { useState } from "react";
import ZoneItemBypassButton from "./ZoneItemBypassButton";
import { IoWarning } from "react-icons/io5";
import classNames from "classnames";

const ZoneItemCard = ({
  securityStatus,
  itemName,
}: {
  securityStatus: boolean;
  itemName: string;
}) => {
  const [doorStatus, setDoorStatus] = useState<boolean>(securityStatus);

  return (
    <button className="group relative min-w-3xl">
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-50 group-hover:blur-2xl" />
      <div className="relative py-4 flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950 pr-4 px-5">
        <div
          className={classNames(
            "w-1/3 flex justify-start items-center gap-3 text-xl",
            !doorStatus && "text-orange-600"
          )}
        >
          {!doorStatus && <IoWarning />}
          <p className="text-[14px] uppercase">{itemName}</p>
        </div>
        <div className="w-1/3 grow flex items-center justify-between gap-3 py-3">
          <div className="flex gap-2 justify-end items-center h-full w-1/2">
            <span className="text-xs uppercase">Ready</span>
            <div
              className={classNames(
                "w-6 h-6 rounded-full",
                doorStatus ? "bg-[#00ff7c]" : "bg-gray-600"
              )}
            ></div>
          </div>
          <div className="flex gap-2 justify-start items-center h-full w-1/2">
            <div
              className={classNames(
                "w-6 h-6 rounded-full",
                !doorStatus ? "bg-orange-600" : "bg-gray-600"
              )}
            ></div>
            <span className="text-xs uppercase">Trouble</span>
          </div>
        </div>
        <div className="w-1/3 flex justify-end gap-5">
          <ZoneItemBypassButton
            onClick={() => {
              setDoorStatus(!doorStatus);
            }}
          />
        </div>
      </div>
    </button>
  );
};

export default ZoneItemCard;
