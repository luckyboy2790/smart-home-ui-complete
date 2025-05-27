import styled from "styled-components";
import PlayingSection from "./PlayingSection";
import PlayListSection from "./PlayListSection";
import { useState } from "react";
import { FaList, FaRegWindowClose } from "react-icons/fa";

const Card = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPlay, setIsPlay] = useState<boolean>(false);

  return (
    <StyledWrapper isPlay={isPlay}>
      <div className="card">
        <div className="w-full relative overflow-x-hidden flex flex-row h-full overflow-y-hidden">
          <div className="md:w-3/5 w-full h-full px-5 flex flex-col justify-evenly items-center">
            <PlayingSection isPlay={isPlay} setIsPlay={setIsPlay} />
          </div>
          <div className="w-2/5 hidden md:flex">
            <div className="w-full h-full hidden md:flex flex-col items-start justify-between gap-3 p-4">
              <PlayListSection />
            </div>
          </div>
          <div
            className={`sidebar md:hidden ${isSidebarOpen ? "open" : "closed"}`}
          >
            <div className="w-[300px] h-full flex flex-col items-start justify-between gap-3 p-4">
              <button
                className="sidebar-toggle"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                {isSidebarOpen ? (
                  <FaRegWindowClose className="text-2xl" />
                ) : (
                  <FaList className="text-2xl" />
                )}
              </button>
              <PlayListSection />
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ isPlay: boolean }>`
  min-height: 600px;

  .card {
    --main-color: #fff;
    --bg-color: #090909;
    --sub-main-color: #b9b9b9;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    width: 100%;
    height: calc(100vh - 250px);
    display: flex;
    min-height: 600px;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
    padding: 0px 15px;
    background-color: red;
    border-radius: 10px;
    border: none;
    color: white;
    position: relative;
    cursor: pointer;
    font-weight: 900;
    transition-duration: 0.2s;
    background: ${(props) => (props.isPlay ? "#898989c4" : "#bfbfbfb0")};
  }

  .card:before,
  .card:after {
    content: "";
    position: absolute;
    left: -2px;
    top: -2px;
    border-radius: 10px;
    ${(props) =>
      props.isPlay &&
      `
        background: linear-gradient(
          45deg,
          #fb0094,
          #0000ff,
          #00ff00,
          #ffff00,
          #ff0000,
          #fb0094,
          #0000ff,
          #00ff00,
          #ffff00,
          #ff0000
        );
        background-size: 400% 100%;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        z-index: -1;
        animation: steam 20s linear infinite;
      `}
  }

  @keyframes steam {
    0% {
      background-position: 0 0;
    }

    50% {
      background-position: 400% 0;
    }

    100% {
      background-position: 0 0;
    }
  }

  .card:after {
    filter: blur(25px);
  }

  .card__img {
    height: 224px;
    width: 224px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-inline: auto;
    background: #131313;
    border-radius: 100%;
  }

  .card__img svg {
    width: 154px;
    height: 154px;
    border-radius: 100%;
  }

  .card__title {
    font-weight: 500;
    font-size: 28px;
    color: var(--main-color);
    text-align: center;
    margin-bottom: 10px;
  }

  .card__subtitle {
    font-weight: 400;
    font-size: 16px;
    color: white;
    text-align: center;
    cursor: pointer;
  }

  .card__wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }

  .card__time {
    font-weight: 400;
    font-size: 12px;
    color: var(--main-color);
  }

  .card__timeline {
    width: 100%;
    height: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .card__timeline progress {
    width: 100%;
    height: 100%;
    border-radius: 100px;
  }

  .card__timeline progress::-webkit-progress-bar {
    background-color: #424242;
    border-radius: 100px;
  }

  .card__timeline progress::-webkit-progress-value {
    background-color: #fff;
    border-radius: 100px;
  }

  .card__btn {
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .card__btn-play {
    width: 70px;
    height: 70px;
    font-size: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sidebar {
    position: absolute;
    right: 0;
    top: 0px;
    width: 300px;
    height: 100%;
    background-color: #1e1e1e;
    z-index: 50;
    transition: transform 0.3s ease-in-out;
    transform: translateX(100%); /* Initially off-screen */
  }

  .sidebar.open {
    transform: translateX(0); /* Slide into view */
  }

  .sidebar.closed {
    transform: translateX(100%); /* Slide out of view */
  }

  /* Sidebar Toggle Button */
  .sidebar-toggle {
    position: absolute;
    top: 10px;
    left: -45px;
    border: none;
    padding: 10px;
    cursor: pointer;
    color: white;
    transition: background-color 0.3s;
  }
`;

export default Card;
