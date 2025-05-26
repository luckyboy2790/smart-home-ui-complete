import { useEffect, useState } from "react";
import Switch from "./LightSwitch";
import Slider from "./Slider";

const Card = ({
  cardTitle,
  id,
  isOn,
  brightness,
}: {
  cardTitle: string;
  id: string;
  isOn: string;
  brightness: number;
}) => {
  const [sliderValue, setSliderValue] = useState(brightness);
  const [selectedValue, setSelectedValue] = useState(isOn);

  useEffect(() => {
    if (sliderValue === 0) {
      setSelectedValue("off");
    } else {
      setSelectedValue("on");
    }
  }, [sliderValue]);

  return (
    <div className="group relative flex flex-col rounded-xl bg-[#bfbfbfd1] hover:!bg-[#3b3b3baf] p-4 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20">
      <div className="absolute inset-px rounded-[11px] bg-transparent" />
      <div className="relative flex flex-col gap-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base font-semibold text-white 2xl:text-xl">
              {cardTitle}
            </h3>
          </div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base font-semibold text-white">
              {sliderValue}%
            </h3>
          </div>
        </div>
        <div className="mb-4 gap-4">
          <Slider value={sliderValue} onChange={setSliderValue} />
        </div>
        <div className="w-full">
          <Switch
            groupName={id}
            selectedValue={selectedValue}
            onChange={(value: string) => setSelectedValue(value)}
            setSliderValue={setSliderValue}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
