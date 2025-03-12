import TempListItemCard from "./TempListItemCard";

type TagLabel = "auto" | "off" | "cool" | "heat";

type TempItem = {
  tempStatus: TagLabel;
  itemName: string;
  currentTemp: number;
};

const TempItemData: TempItem[] = [
  {
    tempStatus: "auto",
    itemName: "Golf simulator",
    currentTemp: 76,
  },
  {
    tempStatus: "off",
    itemName: "Media room",
    currentTemp: 60,
  },
  {
    tempStatus: "cool",
    itemName: "Home theater",
    currentTemp: 80,
  },
  {
    tempStatus: "auto",
    itemName: "Main bedroom",
    currentTemp: 76,
  },
  {
    tempStatus: "cool",
    itemName: "Main ensuite",
    currentTemp: 84,
  },
  {
    tempStatus: "heat",
    itemName: "study",
    currentTemp: 75,
  },
  {
    tempStatus: "auto",
    itemName: "Library",
    currentTemp: 69,
  },
];

const Card = () => {
  return (
    <div className="card w-full bg-[#07182E] rounded-2xl relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,183,255,0.5)]">
      <div className="card-content h-[calc(100vh-250)] p-4 relative z-10 flex flex-col gap-5">
        <h6>GLOBAL CLIMATES</h6>
        <div className="flex flex-col gap-3 h-[calc(100vh-330px)] py-5 px-2 justify-between overflow-auto">
          {TempItemData.map((item, index) => (
            <TempListItemCard
              key={index}
              tempStatus={item.tempStatus}
              itemName={item.itemName}
              currentTemp={item.currentTemp}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
