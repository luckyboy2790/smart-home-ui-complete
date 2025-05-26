import { Main } from "../components";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const MainContainer = () => {
  const location = useLocation();

  return (
    <Main>
      <Main.Container>
        <motion.div
          key={location.pathname} // triggers animation on route change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Outlet />
        </motion.div>
      </Main.Container>
    </Main>
  );
};

export default MainContainer;
