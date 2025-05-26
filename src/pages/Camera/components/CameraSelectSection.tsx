import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import { TiArrowUnsorted } from "react-icons/ti";

const rooms = ["camera 1", "camera 2", "camera 3"];

const CameraSelect = () => {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);

  return (
    <div className="absolute lg:relative top-0 left-0 text-white z-10 w-48 lg:h-full h-auto flex flex-col p-4">
      <Listbox
        value={selectedRoom}
        onChange={(value) => {
          setSelectedRoom(value);
        }}
      >
        <div className="relative w-full">
          <ListboxButton className="flex w-full items-center justify-between gap-2 px-4 py-2 text-xs border border-gray-200 bg-transparent rounded-md">
            <span>{selectedRoom}</span>
            <TiArrowUnsorted className="text-white" />
          </ListboxButton>

          <ListboxOptions className="absolute top-full left-0 mt-1 w-full bg-transparent text-white rounded-md shadow-lg border border-gray-300 z-50">
            {rooms.map((room, index) => (
              <ListboxOption
                key={index}
                value={room}
                className="px-4 py-2 cursor-pointer text-xs"
              >
                {room}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
};

export default CameraSelect;
