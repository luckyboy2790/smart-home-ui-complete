import CurtainCard from "./components/CurtainCard";
import SceneCard from "./components/SceneCard";

const cardInfos = [
  {
    cardTitle: "All Shades",
    brightness: 80,
    isOn: "on",
  },
  {
    cardTitle: "South Window 1",
    brightness: 78,
    isOn: "off",
  },
  {
    cardTitle: "South Window 2",
    brightness: 100,
    isOn: "off",
  },
  {
    cardTitle: "Patio French Doors",
    brightness: 35,
    isOn: "off",
  },
  {
    cardTitle: "Blackout",
    brightness: 100,
    isOn: "on",
  },
  {
    cardTitle: "Curtains",
    brightness: 100,
    isOn: "on",
  },
  {
    cardTitle: "Mosquito",
    brightness: 100,
    isOn: "on",
  },
];

const Curtains = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between gap-15">
      <div className="lg:w-3/5 w-full grid grid-cols-1 xl:grid-cols-2 gap-10">
        {cardInfos.map((item, index) => (
          <CurtainCard
            key={index}
            cardTitle={item.cardTitle}
            brightness={item.brightness}
            isOn={item.isOn}
            id={`card-${index}`}
          />
        ))}
      </div>
      <div className="lg:w-2/5 w-full grid grid-cols-1">
        <SceneCard />
      </div>
    </div>
  );
};

export default Curtains;
