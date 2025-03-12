import ClimateControllCard from "./components/AllTempControlCard";
import Card from "./components/TempListCard";

const HVAC = () => {
  return (
    <div className="flex 2xl:flex-row flex-col justify-between gap-10">
      <div className="2xl:w-1/3 w-full">
        <ClimateControllCard currentTemp={72} targetTemp={69} />
      </div>
      <div className="2xl:w-2/3 w-full">
        <Card />
      </div>
    </div>
  );
};

export default HVAC;
