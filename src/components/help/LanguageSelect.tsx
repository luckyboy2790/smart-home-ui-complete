import { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

const lanugages = ["English", "French"];

const CustomSelect = ({
  setLanguage,
}: {
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(lanugages[0]);

  return (
    <div className="relative text-white z-10 w-50">
      <Listbox
        value={selectedLanguage}
        onChange={(value) => {
          setSelectedLanguage(value);
          setLanguage(value);
        }}
      >
        <ListboxButton className="flex w-full items-center justify-between gap-2 px-4 py-2 text-sm rounded-md border border-white">
          <span>{selectedLanguage}</span>
          <IoIosArrowDown className="text-white" />
        </ListboxButton>
        <ListboxOptions className="absolute mt-2 w-full bg-black text-white rounded-md shadow-lg">
          {lanugages.map((language, index) => (
            <ListboxOption
              key={index}
              value={language}
              className="px-4 py-2 cursor-pointer text-sm hover:bg-gray-700"
            >
              {language}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export default CustomSelect;
