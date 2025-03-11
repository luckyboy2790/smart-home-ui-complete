import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Lights from "./pages/Lights";
import Curtains from "./pages/Curtains";
import HVAC from "./pages/HVAC";
import Music from "./pages/Music";
import TV from "./pages/TV";
import Camera from "./pages/Camera";
import Security from "./pages/Security";
import Pool from "./pages/Pool";
import Intercom from "./pages/Intercom";
import NoPage from "./pages/NoPage";
import './App.css'
import { useTitle } from './hooks'

const App = () => {
  useTitle();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="lights" element={<Lights />} />
        <Route path="curtains" element={<Curtains />} />
        <Route path="hvac" element={<HVAC />} />
        <Route path="music" element={<Music />} />
        <Route path="tv" element={<TV />} />
        <Route path="camera" element={<Camera />} />
        <Route path="security" element={<Security />} />
        <Route path="pool" element={<Pool />} />
        <Route path="intercom" element={<Intercom />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  )
}

export default App
