import React from "react";
import OptionCard from "./components/OptionCard";
import PoolTempCard from "./components/PoolTempCard";
import SceneCard from "./components/SceneCard";

const Pool = () => {
  const [tempStatus, setTempStatus] = React.useState<"cooling" | "heating">(
    "heating"
  );

  return (
    <div className="flex justify-between gap-15 2xl:flex-row flex-col">
      <div className="2xl:w-2/7 w-full">
        <OptionCard tempStatus={tempStatus} />
      </div>
      <div className="2xl:w-3/7 w-full">
        <PoolTempCard
          targetTemp={65}
          currentTemp={68}
          setTempStatus={setTempStatus}
        />
      </div>
      <div className="2xl:w-2/7 w-full">
        <SceneCard tempStatus={tempStatus} />
      </div>
    </div>
  );
};

export default Pool;
