import { useState } from "react";
import TVControlsKeyboardsTab from "./TVControlsKeyboardsTab";
import TVControlsSection from "./TVControlsSection";
import TVKeyboardsSection from "./TVKeyboardsSection";
import { motion, AnimatePresence } from "framer-motion";

const TVControlsKeyboards = () => {
  const [selectPage, setSelectPage] = useState<"keyboard" | "control">(
    "control"
  );

  return (
    <div className="group relative flex flex-col h-full rounded-xl bg-[#ffffff60] p-4 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
      <div className="absolute inset-px rounded-[11px]" />
      <div className="relative flex flex-col gap-1 h-full">
        <div className="flex flex-col gap-5 h-full justify-between min-h-[675px]">
          <div className="w-full flex justify-between">
            <p className="text-xs uppercase text-white flex gap-3 items-center">
              Controls & Keyboards
            </p>
          </div>
          <AnimatePresence mode="wait">
            {selectPage === "control" ? (
              <motion.div
                key="keypad"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center items-start py-10 grow"
              >
                <TVControlsSection />
              </motion.div>
            ) : (
              <motion.div
                key="zone"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className=""
              >
                <TVKeyboardsSection />
              </motion.div>
            )}
          </AnimatePresence>

          <TVControlsKeyboardsTab
            selectPage={selectPage}
            setSelectPage={setSelectPage}
          />
        </div>
      </div>
    </div>
  );
};

export default TVControlsKeyboards;
