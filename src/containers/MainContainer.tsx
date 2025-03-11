import { Main } from "../components";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const MainContainer = () => {

  return (
    <Main>
      <Main.Container>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold">
          <Outlet />
        </motion.div>
      </Main.Container>
    </Main>
  );
};

export default MainContainer;
