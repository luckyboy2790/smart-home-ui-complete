import Card from "./components/PlayMusicCard";
import VolumnSection from "./components/VolumnSection";

const Music = () => {
  return (
    <div className="flex 2xl:flex-row flex-col gap-20 justify-between">
      <div className="2xl:w-3/4 w-full min-h-[600px]">
        <Card />
      </div>
      <div className="2xl:w-1/4 w-full h-full">
        <VolumnSection />
      </div>
    </div>
  );
};

export default Music;
