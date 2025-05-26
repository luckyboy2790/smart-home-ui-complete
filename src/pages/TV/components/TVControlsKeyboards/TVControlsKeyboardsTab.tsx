import styled from "styled-components";

const TVControlsKeyboardsTab = ({
  selectPage,
  setSelectPage,
}: {
  selectPage: "keyboard" | "control";
  setSelectPage: React.Dispatch<React.SetStateAction<"keyboard" | "control">>;
}) => {
  return (
    <StyledWrapper>
      <div className="mydict">
        <div>
          <label className="w-1/2">
            <input
              type="radio"
              name="radio"
              checked={selectPage === "control"}
              onChange={() => {
                setSelectPage("control");
              }}
            />
            <span className="uppercase text-sm">CONTROLS</span>
          </label>
          <label className="w-1/2">
            <input
              type="radio"
              name="radio"
              checked={selectPage === "keyboard"}
              onChange={() => {
                setSelectPage("keyboard");
              }}
            />
            <span className="uppercase text-sm">keypad</span>
          </label>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  :focus {
    outline: 0;
    border-color: #4d82ff;
    box-shadow: 0 0 0 4px #2a4a8f;
  }

  .mydict div {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;
    justify-content: center;
  }

  .mydict input[type="radio"] {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .mydict input[type="radio"]:checked + span {
    box-shadow: 0 0 0 0.0625em #959595;
    background-color: #4a5565fc;
    z-index: 1;
    color: #fff;
  }

  label span {
    display: block;
    cursor: pointer;
    background-color: #4a5565d1;
    padding: 0.375em 0.75em;
    position: relative;
    margin-left: 0.0625em;
    box-shadow: 0 0 0 0.0625em #737373d1;
    letter-spacing: 0.05em;
    color: #ffffff;
    text-align: center;
    transition: background-color 0.5s ease;
  }

  label:first-child span {
    border-radius: 0.375em 0 0 0.375em;
  }

  label:last-child span {
    border-radius: 0 0.375em 0.375em 0;
  }
`;

export default TVControlsKeyboardsTab;
