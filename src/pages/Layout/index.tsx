import { useLocation } from "react-router-dom";
import { AppLayout } from "../../components";
import Notification from "../../components/notification/Notification";
import {
  MainContainer,
  NavigationContainer,
  HelpContainer,
  FooterContainer,
} from "../../containers";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

const Layout = () => {
  const location = useLocation();

  const [room, setRoom] = useState("/assets/background-livingroom.jpg");

  const handleChange = (value: string) => {
    if (value === "Living Room") {
      setRoom("/assets/background-livingroom.jpg");
    } else if (value === "Bathroom") {
      setRoom("/assets/background-bathroom.jpg");
    } else if (value === "Kitchen") {
      setRoom("/assets/background-kitchen.jpg");
    } else if (value === "Bedroom") {
      setRoom("/assets/background-bedroom.jpg");
    } else if (value === "Garage") {
      setRoom("/assets/background-garage.jpg");
    }
  };

  return (
    <div className="relative 2xl:px-30 xl:px-20 px-10">
      <div
        style={{
          backgroundImage: `url(${room})`,
        }}
        className="absolute top-0 left-0 w-screen h-screen bg-center bg-cover"
      ></div>
      <AppLayout>
        <ToastContainer />
        <Notification />
        <NavigationContainer />
        <MainContainer />
        {location.pathname === "/lights" ||
        location.pathname === "/curtains" ||
        location.pathname === "/music" ||
        location.pathname === "/tv" ? (
          <FooterContainer handleChange={handleChange} />
        ) : (
          <div className="row-start-3 col-start-2 h-5"></div>
        )}

        <HelpContainer />
      </AppLayout>
    </div>
  );
};

export default Layout;
