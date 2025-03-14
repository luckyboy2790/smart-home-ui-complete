import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PINKeyPadSection from "./PINKeyPadSection/PINKeyPadSection";
import ZonesSection from "./ZonesSection/ZonesSection";

const Security = () => {
  const [passStatus, setPassStatus] = React.useState<"keypad" | "zone">(
    "keypad"
  );

  return (
    <div className="w-full flex h-[calc(100vh-250px)] min-h-[600px] justify-center items-center">
      <AnimatePresence mode="wait">
        {passStatus === "keypad" ? (
          <motion.div
            key="keypad"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="2xl:min-w-1/3 lg:min-w-1/2 max-lg:w-full h-full"
          >
            <PINKeyPadSection setPassStatus={setPassStatus} />
          </motion.div>
        ) : (
          <motion.div
            key="zone"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="h-ful w-full"
          >
            <ZonesSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Security;
