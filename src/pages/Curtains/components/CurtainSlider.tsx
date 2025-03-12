import styled from "styled-components";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";

const Slider = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) => {
  return (
    <StyledWrapper>
      <MdOutlineLightMode />
      <label className="slider">
        <input
          type="range"
          className="level"
          min="0"
          max="100"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </label>
      <MdLightMode />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;

  .slider {
    flex-grow: 1;
    --slider-width: 100%;
    --slider-height: 10px;
    --slider-bg: rgb(82, 82, 82);
    --slider-border-radius: 999px;
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
    box-shadow: -400px 0 0 400px var(--level-color);
  }

  .slider:hover .level {
    height: calc(var(--slider-height) * 1.5);
  }
`;

export default Slider;
