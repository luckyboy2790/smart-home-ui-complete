import { Navigation } from "../components";
import { AiFillHome } from "react-icons/ai";
import { FaSwimmingPool, FaWindowMaximize, FaPhone } from "react-icons/fa";
import { RiDashboardFill, RiLightbulbFill, RiMusicFill, RiTvFill, RiCameraFill, RiShieldFill } from "react-icons/ri";
import ButtonLink from "../components/buttons/ButtonLink";

const pages = [
  { name: "Home", icon: AiFillHome, to: "/" },
  { name: "Lights", icon: RiLightbulbFill, to: "/lights" },
  { name: "Curtains", icon: FaWindowMaximize, to: "/curtains" },
  { name: "HVAC", icon: RiDashboardFill, to: "/hvac" },
  { name: "Music", icon: RiMusicFill, to: "/music" },
  { name: "TV", icon: RiTvFill, to: "/tv" },
  { name: "Camera", icon: RiCameraFill, to: "/camera" },
  { name: "Security", icon: RiShieldFill, to: "/security" },
  { name: "Pool", icon: FaSwimmingPool, to: "/pool" },
  { name: "Intercom", icon: FaPhone, to: "/intercom" },
];

const NavigationContainer = () => {
  return (
    <Navigation>
      <Navigation.Nav>
        {pages.map(({ name, icon: Icon, to }) => (
          <Navigation.NavItem key={name}>
            <ButtonLink to={to}>
              <Icon />
            </ButtonLink>
          </Navigation.NavItem>
        ))}
      </Navigation.Nav>
    </Navigation>
  );
};

export default NavigationContainer;
