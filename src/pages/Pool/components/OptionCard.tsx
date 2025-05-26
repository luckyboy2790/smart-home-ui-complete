import styled from "styled-components";
import OptionItem from "./OptionItem";

interface WrapperProps {
  tempStatus: "cooling" | "heating";
}

const OptionData = [
  {
    optionName: "Aux 1",
    optionValue: true,
  },
  {
    optionName: "Pool lights",
    optionValue: true,
  },
  {
    optionName: "WaterAllFeature",
    optionValue: true,
  },
  {
    optionName: "WaterAllLights",
    optionValue: true,
  },
  {
    optionName: "Aux 5",
    optionValue: true,
  },
  {
    optionName: "Poolheater",
    optionValue: true,
  },
  {
    optionName: "Poolheater",
    optionValue: true,
  },
];

const OptionCard = ({ tempStatus }: { tempStatus: "cooling" | "heating" }) => {
  return (
    <StyledWrapper tempStatus={tempStatus}>
      <div className="card">
        <div className="flex flex-col px-4 py-4 gap-4 justify-between items-center pt-10">
          <h3 className="text-3xl uppercase">Selections</h3>
          <div className="flex flex-col w-full gap-2 grow overflow-y-auto h-[calc(100vh-390px)] min-h-[450px]">
            {OptionData.map((item, index) => (
              <OptionItem
                key={index}
                optionName={item.optionName}
                optionValue={item.optionValue}
              />
            ))}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<WrapperProps>`
  .card {
    width: 100%;
    height: calc(100vh - 250px);
    min-height: 600px;
    margin: 0 auto;
    background-color: #c5c5c585;
    border-radius: 8px;
    z-index: 1;
    box-shadow: ${({ tempStatus }) =>
      tempStatus === "cooling"
        ? "0px 0px 10px 3px #0080ff"
        : "0px 0px 10px 3px #ff0000"};
    transition: box-shadow 0.8s ease-in-out, transform 0.8s ease-in-out;
  }

  .card:hover {
    box-shadow: ${({ tempStatus }) =>
      tempStatus === "cooling"
        ? "0px 0px 25px 10px #0080ff"
        : "0px 0px 25px 10px #ff0000"};
  }
`;

export default OptionCard;
