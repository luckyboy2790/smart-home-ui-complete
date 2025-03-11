import { AppLayout } from "../../components";
import { HeaderContainer, MainContainer, NavigationContainer } from "../../containers";

const Layout = () => {
    return (
        <AppLayout>
            <HeaderContainer />
            <NavigationContainer />
            <MainContainer />
        </AppLayout>
    );
};

export default Layout;
