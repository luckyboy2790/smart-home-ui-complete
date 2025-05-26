import { SelectValue } from "../type";
import SceneButton from "./SceneButton";
import SceneSelect from "./SceneSelect";

const SceneSelectValues: SelectValue[] = [
  {
    selectTitle: "All on",
  },
  {
    selectTitle: "All off",
  },
  {
    selectTitle: "Morning Coffee",
  },
  {
    selectTitle: "Wine & Dine",
  },
  {
    selectTitle: "Relax",
  },
  {
    selectTitle: "Shopping",
  },
  {
    selectTitle: "Playing",
  },
];

const SceneCard = () => {
  return (
    <div className="w-full mx-auto h-full sticky top-0">
      <div className="relative min-h-[calc(100vh-250px)] bg-[#ffffff80] backdrop-blur rounded-2xl p-8">
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-pink-500 rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-red-400 rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-yellow-500 rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-pink-500 rounded-br-2xl" />
        <div className="relative flex flex-col justify-between gap-10 h-full">
          <h2 className="text-2xl font-bold mb-2 text-white text-center">
            SHADES SCENES
          </h2>

          <div className="flex flex-wrap gap-3 mb-8 text-gray-300 text-sm grow">
            <SceneSelect SceneSelectValues={SceneSelectValues} />
          </div>
          <div className="flex-row md:flex-col space-y-3 gap-10">
            <SceneButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SceneCard;
