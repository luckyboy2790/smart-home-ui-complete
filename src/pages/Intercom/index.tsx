import { useState } from "react";
import { MotionConfig } from "framer-motion";
import VideoIntercom from "./components/VideoIntercom";
import DoorSelection from "./components/DoorSelection";

const Intercom = () => {
    const [selectedDoor, setSelectedDoor] = useState<number | null>(null);

    return (
        <MotionConfig transition={{ duration: 0.4, ease: "easeInOut" }}>
            <div className="flex flex-col lg:flex-row p-4 md:p-6 lg:p-8 text-white gap-6 lg:gap-8">
                <VideoIntercom />
                <DoorSelection selectedDoor={selectedDoor} setSelectedDoor={setSelectedDoor} />
            </div>
        </MotionConfig>
    );
};

export default Intercom;
