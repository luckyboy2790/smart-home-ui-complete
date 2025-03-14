import { motion } from "framer-motion";
import { FaDoorOpen } from "react-icons/fa";

interface DoorSelectionProps {
    selectedDoor: number | null;
    setSelectedDoor: (door: number) => void;
}

const DoorSelection = ({ selectedDoor, setSelectedDoor }: DoorSelectionProps) => {
    return (
        <motion.div
            className="w-full lg:w-1/4 flex flex-col items-center justify-center space-y-3 sm:space-y-4 md:space-y-6 bg-gray-900/90 backdrop-blur-xl p-4 sm:p-6 md:p-8 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.6)] border border-cyan-500/50"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
        >
            {[1, 2, 3, 4].map((door, index) => (
                <motion.button
                    key={door}
                    className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-3 md:px-6 md:py-4 rounded-lg text-xs sm:text-sm md:text-lg font-semibold tracking-wide transition-all w-full text-center border border-cyan-400/50 
                        shadow-[0_0_12px_rgba(0,255,255,0.5)] ${selectedDoor === door
                            ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(0,255,255,1)]"
                            : "bg-gray-800 text-cyan-400 hover:bg-gray-700 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.8)]"
                        }`}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedDoor(door)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                    <FaDoorOpen className="text-xs sm:text-sm md:text-xl" /> Door {door}
                </motion.button>
            ))}
        </motion.div>
    );
};

export default DoorSelection;
