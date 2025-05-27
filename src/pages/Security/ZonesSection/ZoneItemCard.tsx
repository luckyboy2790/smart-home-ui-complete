import { ReactNode, useState } from "react";
import ZoneItemBypassButton from "./ZoneItemBypassButton";
import { IoWarning } from "react-icons/io5";
import classNames from "classnames";
import { FaBan, FaLock, FaUnlock } from "react-icons/fa";

const ZoneItemCard = ({
  securityStatus,
  itemName,
  showDialog,
}: {
  securityStatus: boolean;
  itemName: string;
  showDialog: (opts: {
    title: string;
    description: string;
    confirmText: string;
    icon: ReactNode;
    onConfirm: () => void;
  }) => void;
}) => {
  const [doorStatus, setDoorStatus] = useState<boolean>(securityStatus);

  return (
    <button className="group relative">
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r opacity-20 blur-xl transition-all duration-500 group-hover:opacity-50 group-hover:blur-2xl" />
      <div className="relative py-4 flex lg:flex-row flex-col items-center gap-2 rounded-xl border border-[#5d5d5da1] bg-[#5d5d5da1] pr-4 px-5">
        <div
          className={classNames(
            "lg:w-1/3 w-full flex justify-start items-center gap-3 text-xl",
            !doorStatus && "text-red-500"
          )}
        >
          {!doorStatus && <IoWarning />}
          <p className="text-[14px] uppercase">{itemName}</p>
        </div>
        <div className="lg:w-1/3 w-full grow flex items-center justify-between gap-3 py-3">
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
                !doorStatus ? "bg-red-500" : "bg-gray-600"
              )}
            ></div>
            <span className="text-xs uppercase">Trouble</span>
          </div>
        </div>
        <div className="lg:w-1/3 w-full flex flex-col sm:flex-row justify-end gap-2 sm:gap-4 mt-4 sm:mt-0">
          {doorStatus ? (
            <button
              onClick={() =>
                showDialog({
                  title: `Disarm ${itemName}?`,
                  description: "This will disarm the zone. Proceed?",
                  confirmText: "Disarm",
                  icon: <FaUnlock size={20} />,
                  onConfirm: () => {
                    console.log(`${itemName} disarmed`);
                    setDoorStatus(false);
                  },
                })
              }
              className="px-4 py-2 rounded-md text-xs sm:text-sm bg-red-500 text-white hover:bg-red-400 transition shadow-[0_0_6px_#ff0044] min-w-[88px]"
            >
              DISARM
            </button>
          ) : (
            <button
              onClick={() =>
                showDialog({
                  title: `Arm ${itemName}?`,
                  description: "This will arm the zone. Continue?",
                  confirmText: "Arm",
                  icon: <FaLock size={20} />,
                  onConfirm: () => {
                    console.log(`${itemName} armed`);
                    setDoorStatus(true);
                  },
                })
              }
              className="px-4 py-2 rounded-md text-xs sm:text-sm bg-green-500 text-black hover:bg-green-400 transition shadow-[0_0_6px_#00ff88] min-w-[88px]"
            >
              ARM
            </button>
          )}

          <ZoneItemBypassButton
            onClick={() => {
              showDialog({
                title: `Bypass ${itemName}?`,
                description: "This will bypass the zone. Proceed?",
                confirmText: "Bypass",
                icon: <FaBan size={20} />,
                onConfirm: () => {
                  console.log(`${itemName} bypassed`);
                },
              });
            }}
          />
        </div>
      </div>
    </button>
  );
};

export default ZoneItemCard;
