import { AppLayout } from "../../components";
import Notification from "../../components/notification/Notification";
import {
  HeaderContainer,
  MainContainer,
  NavigationContainer,
  HelpContainer,
} from "../../containers";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 bg-[url(/src/assets/backgound-livingroom.jpg)] w-screen h-screen bg-center bg-cover"></div>
      <AppLayout>
        <ToastContainer />
        <Notification />
        <HeaderContainer />
        <NavigationContainer />
        <MainContainer />
        <HelpContainer />
      </AppLayout>
    </div>
  );
};

export default Layout;
