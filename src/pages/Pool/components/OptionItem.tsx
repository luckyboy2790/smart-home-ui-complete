import { useState } from "react";
import styled from "styled-components";

interface OptionItemProps {
  optionName: string;
  optionValue: boolean;
}

const OptionItem = ({ optionName, optionValue }: OptionItemProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(optionValue);

  return (
    <div className="w-full flex justify-between items-center p-4">
      <p className="text-sm uppercase">{optionName}</p>
      <StyledWrapper>
        <label className="switch">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
          />
          <span className="slider" />
        </label>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* The switch - the box around the slider */
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    border: 2px solid #383838;
    border-radius: 50px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 1.4em;
    left: 0.2em;
    bottom: 0.2em;
    background-color: rgb(0, 233, 116);
    border-radius: inherit;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .switch input:checked + .slider {
    box-shadow: 0 0 20px rgba(9, 241, 79, 0.8);
    border: 2px solid #04e763;
  }

  .switch input:checked + .slider:before {
    transform: translateX(1.5em);
  }
`;

export default OptionItem;
