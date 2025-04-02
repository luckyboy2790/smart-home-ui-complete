import TVControllerIcon from "/src/assets/TV_controller.svg";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const TVControllerButton = () => {
  return (
    <div className="relative flex justify-center items-center duration-200 active:scale-90 overflow-hidden">
      <img
        src={TVControllerIcon}
        alt="button"
        className="cursor-pointer sm:w-54 w-40"
        style={{
          filter:
            "invert(30%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%) contrast(90%) drop-shadow(2px 2px 4px 4px rgba(115, 115, 115, 0.5))",
        }}
      />

      <MdKeyboardDoubleArrowUp className="absolute text-white text-4xl" />
    </div>
  );
};

export default TVControllerButton;
