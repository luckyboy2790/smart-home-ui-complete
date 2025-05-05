import { Main } from "../components";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const transitionSettings = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1],
};

const variants = {
  initial: { opacity: 0, x: 50, filter: "blur(8px)" },
  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: transitionSettings,
  },
  exit: {
    opacity: 0,
    x: -50,
    filter: "blur(8px)",
    transition: transitionSettings,
  },
};

const MainContainer = () => {
  const location = useLocation();

  return (
    <Main>
      <Main.Container>
        <AnimatePresence mode="wait">
          <motion.section
            key={location.pathname}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            layout
            className="text-3xl font-semibold"
          >
            <Outlet />
          </motion.section>
        </AnimatePresence>
      </Main.Container>
    </Main>
  );
};

export default MainContainer;
