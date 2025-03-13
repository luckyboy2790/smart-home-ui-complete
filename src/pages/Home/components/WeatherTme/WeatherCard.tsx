import styled from "styled-components";
import WeatherPart from "./WeatherPart";
import TimePart from "./WeatherTimePart";

const WeatherCard = () => {
  return (
    <StyledWrapper>
      <div className="cardContainer">
        <div className="card">
          <WeatherPart />
          <TimePart />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  height: 100%;

  .cardContainer {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px;
    border-radius: 10px;
    gap: 20px;
    backdrop-filter: blur(30px);
    background-color: rgba(2, 6, 24, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.089);
    cursor: pointer;
  }

  .city {
    font-weight: 700;
    font-size: 0.7em;
    letter-spacing: 1.2px;
    color: white;
  }

  .weather {
    font-weight: 500;
    font-size: 0.4em;
    letter-spacing: 1.2px;
    color: rgb(197, 197, 197);
  }

  .temp {
    font-size: 1em;
    color: white;
  }

  .minmaxContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .min,
  .max {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 0px 20px;
    gap: 4px;
  }

  .max {
    align-items: flex-start;
    border-left: 2px solid white;
  }

  .maxHeading,
  .minHeading {
    font-size: 0.5em;
    font-weight: 600;
    color: white;
  }

  .maxTemp,
  .minTemp {
    font-size: 0.4em;
    font-weight: 500;
    color: rgb(197, 197, 197);
  }
`;

export default WeatherCard;
