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
                className="fixed bottom-[6rem] right-6 lg:bottom-[2rem] lg:right-6 text-cyan-400 p-4 
                rounded-full shadow-[0px_0px_12px_#00ffff] transition-all hover:scale-110 hover:shadow-[0px_0px_20px_#00ffff]
                focus:outline-none focus:ring-4 focus:ring-cyan-500"
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
