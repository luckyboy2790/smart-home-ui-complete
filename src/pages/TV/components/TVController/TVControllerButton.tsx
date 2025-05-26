import TVControllerIcon from "/src/assets/TV_controller.svg";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const TVControllerButton = () => {
  return (
    <div className="relative flex justify-center items-center duration-200 active:scale-90 overflow-hidden">
      <img
        src={TVControllerIcon}
        alt="button"
        className="cursor-pointer sm:w-54 w-40"
        draggable={false}
        style={{
          opacity: 0.3,
          filter: "brightness(10%) invert(10%)",
        }}
      />

      <MdKeyboardDoubleArrowUp className="absolute text-white text-4xl" />
    </div>
  );
};

export default TVControllerButton;
