import LightCard from "./components/LightCard";
import SceneCard from "./components/sceneCard";

const cardInfos = [
  {
    cardTitle: "All Lights",
    brightness: 80,
    isOn: "on",
  },
  {
    cardTitle: "Sconces",
    brightness: 78,
    isOn: "off",
  },
  {
    cardTitle: "Canned Lights",
    brightness: 100,
    isOn: "off",
  },
  {
    cardTitle: "Wall Art",
    brightness: 35,
    isOn: "off",
  },
  {
    cardTitle: "Chandelier",
    brightness: 100,
    isOn: "on",
  },
];

const Lights = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between gap-15">
      <div className="lg:w-3/5 w-full grid grid-cols-1 xl:grid-cols-2 gap-10">
        {cardInfos.map((item, index) => (
          <LightCard
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

export default Lights;
