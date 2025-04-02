import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import { TiArrowUnsorted } from "react-icons/ti";

const rooms = ["display 1", "display 2", "display 3"];

const TVDisplayOptionCard = () => {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);

  return (
    <div className="relative top-0 left-0 text-white z-10 w-48 flex flex-col p-4">
      <Listbox
        value={selectedRoom}
        onChange={(value) => {
          setSelectedRoom(value);
        }}
      >
        <div className="relative w-full">
          <ListboxButton className="flex w-full items-center justify-between gap-2 px-4 py-2 text-xs border border-gray-500 bg-transparent rounded-md">
            <span>{selectedRoom}</span>
            <TiArrowUnsorted className="text-white" />
          </ListboxButton>

          <ListboxOptions className="absolute top-full left-0 mt-1 w-full bg-transparent text-white rounded-md shadow-lg border border-gray-600 z-50">
            {rooms.map((room, index) => (
              <ListboxOption
                key={index}
                value={room}
                className="px-4 py-2 cursor-pointer text-xs z-20"
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

export default TVDisplayOptionCard;
