import styled from "styled-components";
import { SelectValue } from "../type";

const SceneSelect = ({
  SceneSelectValues,
}: {
  SceneSelectValues: SelectValue[];
}) => {
  return (
    <StyledWrapper>
      <div className="radio-input">
        {SceneSelectValues.map((item, index) => (
          <label key={index} className="label">
            <input
              type="radio"
              id={`value-${index}`}
              defaultChecked
              name="value-radio"
              defaultValue={`value-${index}`}
            />
            <p className="text">{item.selectTitle}</p>
          </label>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;

  .radio-input {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .radio-input * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .radio-input label {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 0px 20px;
    width: 100%;
    cursor: pointer;
    height: 50px;
    position: relative;
  }

  .radio-input label::before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 45px;
    z-index: -1;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    border-radius: 10px;
    border: 2px solid transparent;
  }
  .radio-input label:hover::before {
    transition: all 0.2s ease;
    background-color: #7c7b7b80;
  }

  .radio-input .label:has(input:checked)::before {
    background-color: #00000040;
    border-color: #ffffff7a;
    height: 50px;
  }
  .radio-input .label .text {
    color: #fff;
  }

  .radio-input .label input[type="radio"] {
    background-color: #3d3d3d;
    appearance: none;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .radio-input .label input[type="radio"]:checked {
    background-color: #3d3d3d;
    -webkit-animation: puls 0.7s forwards;
    animation: pulse 0.7s forwards;
  }

  .radio-input .label input[type="radio"]:before {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    transition: all 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
    background-color: #fff;
    transform: scale(0);
  }

  .radio-input .label input[type="radio"]:checked::before {
    transform: scale(1);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
    }
    70% {
      box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }
`;

export default SceneSelect;
