import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import styled from "styled-components";

const Notification: React.FC = () => {
  const { alarmStatus } = useAppContext();
  const [visible, setVisible] = useState(alarmStatus);

  useEffect(() => {
    setVisible(alarmStatus);
  }, [alarmStatus]);

  if (!visible) return null;

  return (
    <StyledWrapper>
      <div
        className="fixed md:top-5 sm:top-20 top-15 left-1/2 transform -translate-x-1/2 bg-red-600 text-white
             px-6 py-3 font-bold rounded-lg shadow-lg z-50 text-center
             flex items-center justify-center animate-fade-slide
             animate-blink-shadow"
      >
        🚨 Alarm 🚨
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  @keyframes blink-shadow {
    0%,
    100% {
      box-shadow: 0 0 0px red;
    }
    50% {
      box-shadow: 0 0 20px 6px red;
    }
  }

  .animate-blink-shadow {
    animation: blink-shadow 1s infinite;
  }
`;

export default Notification;
