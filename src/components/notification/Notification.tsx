import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";

const Notification: React.FC = () => {
  const { alarmStatus } = useAppContext();
  const [visible, setVisible] = useState(alarmStatus);

  useEffect(() => {
    if (alarmStatus) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [alarmStatus]);

  if (!visible) return null;

  return (
    <div
      className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white
                 px-6 py-3 font-bold rounded-lg shadow-lg z-50 text-center
                 flex items-center justify-center animate-fade-slide"
    >
      🚨 Alarm 🚨
    </div>
  );
};

export default Notification;
