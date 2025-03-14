import SecurityPinPad from "./SecurityPinpad";
import { IoMdPower } from "react-icons/io";
import { TbHomeShield } from "react-icons/tb";
import { GoShieldLock } from "react-icons/go";

const SecuritySectionCard = () => {
  return (
    <div className="group h-full w-full relative flex flex-col rounded-xl bg-slate-950 p-4 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
      <div className="absolute inset-px rounded-[11px] bg-slate-950" />
      <div className="relative flex flex-col justify-between items-center w-full h-full gap-5">
        <div className="flex w-full justify-between items-center">
          <h3 className="text-xl text-white">Security</h3>
          <p className="text-xs text-blue-500  uppercase">view zones</p>
        </div>

        <div className="flex justify-center items-center w-full grow">
          <SecurityPinPad />
        </div>

        <div className="w-full flex justify-between">
          <div className="flex flex-col gap-2 justify-center items-center w-1/3 py-4 text-4xl cursor-pointer text-neutral-500">
            <IoMdPower />
            <p className="uppercase text-sm">disarm</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center w-1/3 py-4 text-4xl cursor-pointer text-red-500">
            <GoShieldLock />
            <p className="uppercase text-sm">arm away</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center w-1/3 py-4 text-4xl cursor-pointer text-blue-500">
            <TbHomeShield />
            <p className="uppercase text-sm">arm home</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySectionCard;
