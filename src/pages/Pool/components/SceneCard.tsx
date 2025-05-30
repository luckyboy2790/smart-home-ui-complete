import styled from "styled-components";
import SceneSelect from "./SceneSelect";

const SceneCard = ({ tempStatus }: { tempStatus: "cooling" | "heating" }) => {
  return (
    <StyledWrapper $tempStatus={tempStatus}>
      <div className="card">
        <div className="flex flex-col px-4 py-4 gap-4 justify-between items-center pt-10">
          <h3 className="text-3xl uppercase">Pool Depth</h3>
          <div className="flex flex-col w-full gap-2 grow overflow-y-auto h-[calc(100vh-390px)] min-h-[450px]">
            <SceneSelect />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ $tempStatus: "cooling" | "heating" }>`
  .card {
    width: 100%;
    height: calc(100vh - 250px);
    min-height: 600px;
    margin: 0 auto;
    background-color: #c5c5c585;
    border-radius: 8px;
    z-index: 1;
    box-shadow: ${({ $tempStatus }) =>
      $tempStatus === "cooling"
        ? "0px 0px 10px 3px #0080ff"
        : "0px 0px 10px 3px #ff0000"};
    transition: box-shadow 0.8s ease-in-out, transform 0.8s ease-in-out;
  }

  .card:hover {
    box-shadow: ${({ $tempStatus }) =>
      $tempStatus === "cooling"
        ? "0px 0px 25px 10px #0080ff"
        : "0px 0px 25px 10px #ff0000"};
  }
`;

export default SceneCard;
