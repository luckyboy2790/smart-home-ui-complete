import { Navigation } from "../components";
import { AiFillHome } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { VscGraphLine } from "react-icons/vsc";
import { AiFillSetting } from "react-icons/ai";
import ButtonLink from "../components/buttons/ButtonLink";

const NavigationContainer = () => {
  return (
    <Navigation>
      <Navigation.Nav>
        <Navigation.NavItem>
          <ButtonLink href="#">
            <AiFillHome />
          </ButtonLink>
        </Navigation.NavItem>
        <Navigation.NavItem>
          <ButtonLink href="#">
            <RiDashboardFill />
          </ButtonLink>
        </Navigation.NavItem>
        <Navigation.NavItem>
          <ButtonLink href="#">
            <VscGraphLine />
          </ButtonLink>
        </Navigation.NavItem>
        <Navigation.NavItem>
          <ButtonLink href="#">
            <AiFillSetting />
          </ButtonLink>
        </Navigation.NavItem>
      </Navigation.Nav>
    </Navigation>
  );
};

export default NavigationContainer;
