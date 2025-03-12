import React, { useEffect } from "react";
import styled from "styled-components";
import { CgArrowLongDownC, CgArrowLongUpC } from "react-icons/cg";
import { BsFire, BsSnow2, BsPower } from "react-icons/bs";
import { BiSolidLeaf } from "react-icons/bi";

interface WrapperProps {
  status: "cooling" | "heating";
}

const ClimateControllCard = ({
  currentTemp,
  targetTemp,
}: {
  currentTemp: number;
  targetTemp: number;
}) => {
  const [status, setStatus] = React.useState<"cooling" | "heating">("heating");

  useEffect(() => {
    const result: number = targetTemp - currentTemp;

    if (result > 0) {
      setStatus("heating");
    } else {
      setStatus("cooling");
    }
  }, []);

  return (
    <StyledWrapper status={status}>
      <div className="card 2xl:min-h-[calc(100vh-250px)] h-auto">
        <div className="heading">CLIMATE</div>
        <div className="flex flex-col justify-center items-center gap-6 w-full grow">
          <div className="w-full md:py-5 md:px-6 px-3 py-2.5">
            <h6 className="md:text-lg text-base text-right w-full text-neutral-300">
              Current Temp is {currentTemp}°
            </h6>
          </div>
          <div className="w-full md:py-5 py-2.5">
            <h1 className="md:text-9xl text-7xl text-center text-neutral-300">
              {targetTemp}°
            </h1>
          </div>
          <div>
            {status === "heating" ? (
              <p className="!text-red-500">heating</p>
            ) : (
              <p className="!text-blue-500">heating</p>
            )}
          </div>
        </div>
        <div className="h-auto flex justify-between">
          <div className="flex justify-center items-center w-1/2 py-3 text-blue-500 text-4xl">
            <CgArrowLongDownC />
          </div>
          <div className="flex justify-center items-center w-1/2 py-3 text-red-500 text-4xl">
            <CgArrowLongUpC />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-center items-center w-1/4 py-4 text-4xl text-neutral-500">
            <BsPower />
          </div>
          <div className="flex justify-center items-center w-1/4 py-4 text-4xl text-red-500">
            <BsFire />
          </div>
          <div className="flex justify-center items-center w-1/4 py-4 text-4xl text-blue-500">
            <BsSnow2 />
          </div>
          <div className="flex justify-center items-center w-1/4 py-4 text-4xl text-emerald-500">
            <BiSolidLeaf />
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
    background: linear-gradient(-45deg, #161616 0%, #000000 100%);
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
    background: ${({ status }) =>
      status === "cooling"
        ? "linear-gradient(-45deg, #0080ff 0%, #0055ff 10%)"
        : "linear-gradient(-45deg, #ff0000 0%, #d80000 10%)"};
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

export default ClimateControllCard;
