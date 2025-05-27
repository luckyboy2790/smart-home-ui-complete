import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import CustomSelect from "./LanguageSelect";

interface HelpOverlayProps {
  onClose: () => void;
}

const HelpOverlay: React.FC<HelpOverlayProps> = ({ onClose }) => {
  const [language, setLanguage] = useState<string>("English");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-opacity-70 backdrop-blur-lg flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Overlay Box with Neon Glow & Mobile Responsiveness */}
        <motion.div
          className="bg-[#0d0d0d] border-2 border-white text-white p-6 rounded-lg shadow-[0px_0px_20px_#ffffff]
                    max-w-lg w-full sm:max-w-md mx-4 sm:mx-0 relative"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-white hover:text-white transition"
            onClick={onClose}
            aria-label="Close Help"
          >
            <FiX className="w-7 h-7" />
          </button>

          {/* Language Selector with Neon Styling */}
          <div className="mb-4 text-center flex items-center justify-center gap-2">
            <label className="text-white font-semibold">Language: </label>
            <CustomSelect setLanguage={setLanguage} />
          </div>

          {/* Help Content with Neon Theme */}
          <div className="text-center text-white">
            {language === "English" ? (
              <p className="text-lg">
                Welcome! This section explains how to use the app efficiently.
              </p>
            ) : (
              <p className="text-lg">
                Bienvenue ! Cette section explique comment utiliser
                l'application efficacement.
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HelpOverlay;
