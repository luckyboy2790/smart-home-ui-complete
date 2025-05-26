import { motion } from "framer-motion";
import { FaVideo, FaPhoneAlt, FaTimes, FaMinusCircle } from "react-icons/fa";

const VideoIntercom = () => {
  return (
    <div className="flex flex-col justify-between w-full lg:w-3/4 p-4 md:p-6 lg:p-8 bg-[#ececec81] backdrop-blur-xl rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.8)] border border-white/50">
      <motion.div
        className="relative bg-[#25252556] w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] flex flex-col items-center justify-center rounded-lg"
        whileHover={{ scale: 1.02 }}
      >
        <FaVideo className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-3" />
        <p className="text-white text-sm sm:text-base md:text-lg font-semibold tracking-wide">
          Live Video Intercom
        </p>
        <span className="text-xs sm:text-sm text-gray-400">
          H.264 / H.265 Streaming
        </span>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mt-4 md:mt-6">
        {[
          {
            text: "Answer",
            icon: <FaPhoneAlt />,
            gradient: "from-cyan-600 to-cyan-500",
            glow: "shadow-[0_0_15px_rgba(0,255,255,0.8)]",
          },
          {
            text: "Hang Up",
            icon: <FaTimes />,
            gradient: "from-red-600 to-red-500",
            glow: "shadow-[0_0_15px_rgba(255,50,50,0.8)]",
          },
          {
            text: "DND",
            icon: <FaMinusCircle />,
            gradient: "from-purple-600 to-purple-500",
            glow: "shadow-[0_0_15px_rgba(200,100,255,0.8)]",
          },
        ].map(({ text, icon, gradient, glow }) => (
          <motion.button
            key={text}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 md:px-8 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold tracking-wide w-full sm:w-auto
                        text-black bg-gradient-to-br ${gradient} transition-all
                        hover:brightness-125 active:brightness-90 border border-white/20
                        ${glow} hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]`}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
          >
            {icon} {text}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default VideoIntercom;
