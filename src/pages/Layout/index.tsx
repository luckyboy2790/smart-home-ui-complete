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
    <AppLayout>
      <ToastContainer />
      <Notification />
      <HeaderContainer />
      <NavigationContainer />
      <MainContainer />
      <HelpContainer />
    </AppLayout>
  );
};

export default Layout;
