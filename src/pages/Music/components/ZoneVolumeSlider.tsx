const ZoneVolumeSlider = ({
    value = 50,
    onChange,
}: {
    value?: number;
    onChange?: (val: number) => void;
}) => {
    return (
        <div className="h-[80px] w-[20px] flex justify-center items-center ml-2">
            <input
                type="range"
                min={0}
                max={100}
                defaultValue={value}
                onChange={(e) => onChange?.(parseInt(e.target.value))}
                className="appearance-none w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"
                style={{
                    writingMode: "vertical-lr",
                    WebkitAppearance: "slider-vertical",
                }}
            />
        </div>
    );
};

export default ZoneVolumeSlider;
