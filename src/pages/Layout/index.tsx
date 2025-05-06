import { AppLayout } from "../../components";
import Notification from "../../components/notification/Notification";
import {
  MainContainer,
  NavigationContainer,
  HelpContainer,
  FooterContainer,
} from "../../containers";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <div className="relative 2xl:px-30 xl:px-20 px-10">
      <div className="absolute top-0 left-0 bg-[url(/src/assets/backgound-livingroom.jpg)] w-screen h-screen bg-center bg-cover"></div>
      <AppLayout>
        <ToastContainer />
        <Notification />
        <NavigationContainer />
        <MainContainer />
        <FooterContainer />
        <HelpContainer />
      </AppLayout>
    </div>
  );
};

export default Layout;
