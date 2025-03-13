import { useState } from "react";
import styled from "styled-components";

type SelectValue = {
  selectTitle: string;
};

const SceneSelectValues: SelectValue[] = [
  { selectTitle: "Spa Mode" },
  { selectTitle: "Romance" },
  { selectTitle: "Sunset Swim" },
];

const SceneSelect = () => {
  const [selectedScene, setSelectedScene] = useState<string>("Romance"); // ✅ State to track selected option

  return (
    <StyledWrapper>
      <div className="radio-buttons-container">
        {SceneSelectValues.map((item, index) => (
          <div className="radio-button" key={index}>
            <input
              name="radio-group"
              id={`radio-${index}`}
              className="radio-button__input"
              type="radio"
              checked={selectedScene === item.selectTitle}
              onChange={() => setSelectedScene(item.selectTitle)} // ✅ Updates state when clicked
            />
            <label htmlFor={`radio-${index}`} className="radio-button__label">
              <span className="radio-button__custom" />
              {item.selectTitle}
            </label>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .radio-buttons-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 20px 40px;
    gap: 24px;
  }

  .radio-button {
    display: inline-block;
    position: relative;
    cursor: pointer;
  }

  .radio-button__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .radio-button__label {
    display: inline-block;
    padding-left: 30px;
    margin-bottom: 10px;
    position: relative;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .radio-button__custom {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #555;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .radio-button__input:checked + .radio-button__label .radio-button__custom {
    transform: translateY(-50%) scale(0.9);
    border: 5px solid #4c8bf5;
    color: #4c8bf5;
  }

  .radio-button__input:checked + .radio-button__label {
    color: #4c8bf5;
  }

  .radio-button__label:hover .radio-button__custom {
    transform: translateY(-50%) scale(1.2);
    border-color: #4c8bf5;
    box-shadow: 0 0 10px #4c8bf580;
  }
`;

export default SceneSelect;
