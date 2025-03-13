import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoVolumeMute } from "react-icons/io5";

const VolumnSection = () => {
  return (
    <StyledWrapper>
      <div className="w-full flex justify-between">
        <h3 className="text-base uppercase">Volumn</h3>
        <IoVolumeMute className="cursor-pointer" />
      </div>
      <div className="flex justify-between gap-4">
        <FaMinus />
        <label className="slider">
          <input type="range" className="level" min="0" max="100" />
        </label>
        <FaPlus />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
  font-size: 20px;

  .slider {
    flex-grow: 1;
    --slider-width: 100%;
    --slider-height: 5px;
    --slider-bg: rgb(82, 82, 82);
    --level-color: #00eaff;
    --level-transition-duration: 0.1s;
    --icon-margin: 15px;
    --icon-color: var(--slider-bg);
    --icon-size: 25px;
  }

  .slider {
    cursor: pointer;
    display: inline-flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  .slider .level {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: var(--slider-width);
    height: var(--slider-height);
    background: var(--slider-bg);
    overflow: hidden;
    border-radius: var(--slider-border-radius);
    transition: height var(--level-transition-duration);
    cursor: inherit;
  }

  .slider .level::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 0;
    height: 0;
    box-shadow: -800px 0 0 800px var(--level-color);
  }

  .slider:hover .level {
    height: calc(var(--slider-height) * 1.5);
  }
`;

export default VolumnSection;
