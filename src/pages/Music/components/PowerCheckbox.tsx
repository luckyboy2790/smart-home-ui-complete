import styled from "styled-components";
import { BiPowerOff } from "react-icons/bi";
import { useState } from "react";

const PowerCheckbox = ({
  isOn,
  groupName,
}: {
  isOn: boolean;
  groupName: number;
}) => {
  const [isChecked, setIsChecked] = useState(isOn);

  return (
    <StyledWrapper>
      <div className="checkbox-container">
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            id={`power-checkbox-${groupName}`}
            className="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label
            htmlFor={`power-checkbox-${groupName}`}
            className="checkbox-label"
          >
            <div className="checkbox-flip">
              <div className="checkbox-front">
                <BiPowerOff />
              </div>
              <div className="checkbox-back">
                <BiPowerOff />
              </div>
            </div>
          </label>
        </div>
        <h3 className="text-base text-white">on</h3>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 50%;

  .checkbox-container {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 100%;
    margin: 0;
    gap: 8px;
  }

  .checkbox {
    display: none;
  }

  .checkbox-label {
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }

  .checkbox-flip {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    perspective: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: transform 0.4s ease;
  }

  .checkbox-front,
  .checkbox-back {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    backface-visibility: hidden;
    transition: transform 0.3s ease;
  }

  .checkbox-front {
    background: #494a4c;
    color: white;
    font-size: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: rotateY(0deg);
  }

  .checkbox-back {
    background: linear-gradient(135deg, #0040ff, #00c1d4);
    color: white;
    font-size: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: rotateY(180deg);
  }

  .checkbox-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .checkbox-wrapper:hover .checkbox-flip {
    transform: scale(1.1);
  }

  .checkbox:checked + .checkbox-label .checkbox-front {
    transform: rotateY(180deg);
  }

  .checkbox:checked + .checkbox-label .checkbox-back {
    transform: rotateY(0deg);
  }

  .icon-path {
    stroke: white;
    stroke-width: 2;
    fill: transparent;
  }
`;

export default PowerCheckbox;
