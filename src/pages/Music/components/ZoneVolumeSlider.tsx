const ZoneVolumeSlider = ({
  value = 50,
  onChange,
}: {
  value?: number;
  onChange?: (val: number) => void;
}) => {
  return (
    <div className="w-full flex justify-center items-center ml-2">
      <input
        type="range"
        min={0}
        max={100}
        defaultValue={value}
        onChange={(e) => onChange?.(parseInt(e.target.value))}
        className="w-full h-1 bg-white rounded-full"
      />
    </div>
  );
};

export default ZoneVolumeSlider;
