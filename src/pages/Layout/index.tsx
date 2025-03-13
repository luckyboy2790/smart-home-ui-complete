import { AppLayout } from "../../components";
import { HeaderContainer, MainContainer, NavigationContainer, HelpContainer } from "../../containers";

const Layout = () => {
    return (
        <AppLayout>
            <HeaderContainer />
            <NavigationContainer />
            <MainContainer />
            <HelpContainer />
        </AppLayout>
    );
};

export default Layout;
