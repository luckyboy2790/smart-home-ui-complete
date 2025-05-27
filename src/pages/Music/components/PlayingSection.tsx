import { IoMusicalNote } from "react-icons/io5";
import {
  MdSkipNext,
  MdSkipPrevious,
  MdFastForward,
  MdFastRewind,
} from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { CgPlayPause } from "react-icons/cg";

const PlayingSection = ({
  isPlay,
  setIsPlay,
}: {
  isPlay: boolean;
  setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div className="card__img">
        <IoMusicalNote />
      </div>
      <div className="card__title">Runaway</div>
      <div className="card__subtitle">Smalltown Boy , Shane D</div>
      <div className="card__wrapper">
        <div className="card__time card__time-passed">03:34</div>
        <div className="card__timeline">
          <progress value={55} max={100} />
        </div>
        <div className="card__time card__time-left">02:04</div>
      </div>
      <div className="card__wrapper">
        <button className="card__btn">
          <MdFastRewind />
        </button>
        <button className="card__btn">
          <MdSkipPrevious />
        </button>
        <button className="card__btn card__btn-play">
          {isPlay ? (
            <CgPlayPause
              onClick={() => setIsPlay(false)}
              className="text-8xl"
            />
          ) : (
            <FaPlay onClick={() => setIsPlay(true)} className="text-4xl" />
          )}
        </button>
        <button className="card__btn">
          <MdSkipNext />
        </button>
        <button className="card__btn">
          <MdFastForward />
        </button>
      </div>
    </>
  );
};

export default PlayingSection;
