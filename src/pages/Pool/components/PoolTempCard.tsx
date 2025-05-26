import styled from "styled-components";
import { CgArrowLongDownC, CgArrowLongUpC } from "react-icons/cg";
import React from "react";

interface WrapperProps {
  status: "cooling" | "heating";
}

const PoolTempCard = ({
  currentTemp,
  targetTemp,
  setTempStatus,
}: {
  currentTemp: number;
  targetTemp: number;
  setTempStatus: React.Dispatch<React.SetStateAction<"cooling" | "heating">>;
}) => {
  const [status, setStatus] = React.useState<"cooling" | "heating">("heating");
  const [targetTempState, setTargetTempState] =
    React.useState<number>(targetTemp);

  React.useEffect(() => {
    const result: number = targetTempState - currentTemp;

    if (result > 0) {
      setStatus("heating");
      setTempStatus("heating");
    } else {
      setStatus("cooling");
      setTempStatus("cooling");
    }
  }, [targetTempState, currentTemp]);

  return (
    <StyledWrapper status={status}>
      <div className="card h-[calc(100vh-250px)] min-h-[600px]">
        <div className="flex flex-col justify-center items-center gap-6 w-full grow">
          <div className="w-full md:py-5 md:px-6 px-3 py-2.5">
            <h6 className="md:text-lg text-base text-right w-full text-neutral-300">
              Current Temp is{" "}
              <span className="md:text-2xl text-xl">{currentTemp}°</span>
            </h6>
          </div>
          <div className="w-full flex justify-between items-center md:py-5 py-2.5">
            <div
              className="flex justify-center items-center w-1/2 py-3 text-blue-700 text-4xl cursor-pointer"
              onClick={() => setTargetTempState(targetTempState - 1)}
            >
              <CgArrowLongDownC />
            </div>

            <h1 className="md:text-9xl text-5xl text-center text-neutral-300">
              {targetTempState}°
            </h1>

            <div
              className="flex justify-center items-center w-1/2 py-3 text-red-600 text-4xl cursor-pointer"
              onClick={() => setTargetTempState(targetTempState + 1)}
            >
              <CgArrowLongUpC />
            </div>
          </div>
          <div>
            {status === "heating" ? (
              <p className="!text-red-500 text-xl">Heating</p>
            ) : (
              <p className="!text-blue-500 text-xl">Cooling</p>
            )}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<WrapperProps>`
  .card {
    position: relative;
    width: 100%;
    background: #a9a9a9b8;
    color: #81818144;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    padding: 40px 14px;
    border-radius: 8px;
    cursor: pointer;
  }

  .card::before {
    content: "";
    position: absolute;
    inset: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: 101.3%;
    border-radius: 10px;
    background-color: ${({ status }) =>
      status === "cooling" ? "#0080ff" : "#ff0000"};
    z-index: -10;
    pointer-events: none;
    transition: all 0.8s cubic-bezier(0.175, 0.95, 0.9, 1.275);
    box-shadow: 0px 20px 30px hsla(0, 0%, 0%, 0.521);
  }

  .heading {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 900;
    color: white;
  }

  .card p:not(.heading) {
    font-size: 18px;
  }

  .card p:last-child {
    color: #fa0000;
    font-weight: 900;
  }

  .card:hover::after {
    transition: all 0.2s cubic-bezier(0.175, 0.285, 0.82, 1.275);
  }

  .card:hover::before {
    transform: scaleX(1.02) scaleY(1.02);
    box-shadow: ${({ status }) =>
      status === "cooling"
        ? "0px 0px 30px 0px hsla(210, 100%, 50%, 0.5)"
        : "0px 0px 30px 0px hsla(0, 100%, 50%, 0.5)"};
  }
`;

export default PoolTempCard;
