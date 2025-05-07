import { useState } from "react";
import HelpOverlay from "../components/help/HelpOverlay";
import { MdQuestionMark } from "react-icons/md";

const HelpContainer = () => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <>
      {/* Help Button */}
      <button
        aria-label="Help"
        className="fixed bottom-[1rem] z-10 right-6 lg:bottom-[2rem] lg:right-6 text-[#5c5c5c] p-4
                rounded-full shadow-[0px_0px_12px_#5c5c5c] transition-all hover:scale-110 hover:shadow-[0px_0px_20px_#5c5c5c]
                focus:outline-none focus:ring-4 focus:ring-[#5c5c5c]"
        onClick={() => setShowHelp(true)}
      >
        <MdQuestionMark className="w-8 h-8" />
      </button>

      {/* Help Overlay */}
      {showHelp && <HelpOverlay onClose={() => setShowHelp(false)} />}
    </>
  );
};

export default HelpContainer;
