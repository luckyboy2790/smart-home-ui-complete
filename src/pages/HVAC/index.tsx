import ClimateControllCard from "./components/AllTempControlCard";
import Card from "./components/TempListCard";

const HVAC = () => {
  return (
    <div className="flex justify-between gap-10">
      <div className="w-1/3">
        <ClimateControllCard currentTemp={72} targetTemp={69} />
      </div>
      <div className="w-2/3">
        <Card />
      </div>
    </div>
  );
};

export default HVAC;
