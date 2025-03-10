import { AppLayout } from "./components";
import { HeaderContainer, MainContainer, NavigationContainer } from "./containers";
import './App.css'

const App = () => {
  return (
    <AppLayout>
      <HeaderContainer />
      <NavigationContainer />
      <MainContainer />
    </AppLayout>
  )
}

export default App
