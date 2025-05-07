import { useState } from "react";

const FooterContainer = () => {
  const [selected, setSelected] = useState("Living Room"); // default selected item

  const items = ["Living Room", "Bathroom", "Kitchen", "Backyard", "Garage"];

  return (
    <div className="relative md:h-25 row-start-3 col-span-full z-2 w-full flex justify-center items-center">
      <div className="absolute md:top-0 -top-5 h-17 flex flex-col items-center z-10 p-2 max-w-3/5 rounded-[10000px] overflow-y-scroll justify-center bg-[#797979cc] shadow-sm shadow-gray-400">
        <ul className="w-full flex justify-start gap-6 h-full">
          {items.map((item) => (
            <li key={item} className="flex justify-center items-center">
              <button
                onClick={() => setSelected(item)}
                className={`flex px-5 h-13 w-auto items-center justify-center rounded-full group transition-all duration-200 ${
                  selected === item
                    ? "bg-[#2e2e2ed3] text-white"
                    : "bg-transparent"
                }`}
              >
                <div className="w-max text-[12px] lg:group-hover:text-white lg:group-focus:text-white font-sans">
                  {item}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterContainer;
