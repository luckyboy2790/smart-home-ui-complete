import { motion } from "framer-motion";
import { ReactNode } from "react";

const IconButton = ({ icon, color, active }: { icon: ReactNode; color: string; active?: boolean }) => {
    return (
        <motion.button
            className="p-4 rounded-full flex items-center justify-center transition-all"
            style={{
                color: active ? color : "gray",
                fontSize: "28px",
            }}
            whileHover={{ scale: 1.2, color }}
            whileTap={{ scale: 0.9 }}
        >
            {icon}
        </motion.button>
    );
};

export default IconButton;
