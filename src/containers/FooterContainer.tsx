import { useRef, useState } from "react";

const DRAG_THRESHOLD = 5;
const FooterContainer = () => {
  const [selected, setSelected] = useState("Living Room");
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const dragStartedRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const items = ["Living Room", "Bathroom", "Kitchen", "Backyard", "Garage"];

  const startDrag = (x: number) => {
    dragStartedRef.current = true;
    isDraggingRef.current = false;
    startXRef.current = x;
    scrollLeftRef.current = scrollRef.current?.scrollLeft || 0;
  };

  const updateDrag = (dx: number) => {
    if (Math.abs(dx) > DRAG_THRESHOLD) {
      isDraggingRef.current = true;
    }
    if (isDraggingRef.current && scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeftRef.current - dx;
    }
  };

  const endDrag = () => {
    dragStartedRef.current = false;
  };

  const onClickCapture = (e: React.MouseEvent) => {
    if (isDraggingRef.current) {
      e.preventDefault();
      e.stopPropagation();
      isDraggingRef.current = false;
    }
  };

  return (
    <div className="relative md:h-25 row-start-3 col-span-full z-2 w-full flex justify-center items-center">
      <div className="absolute md:top-0 -top-5 md:h-17 h-13 flex flex-col items-center z-10 p-2 max-w-3/5 rounded-[10000px] overflow-hidden justify-center backdrop-blur bg-[#2e2e2ea8] shadow-sm shadow-gray-400">
        <div
          ref={scrollRef}
          className="w-full flex gap-3 overflow-x-scroll"
          onMouseDown={(e) => startDrag(e.clientX)}
          onMouseMove={(e) => dragStartedRef.current && updateDrag(e.clientX - startXRef.current)}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onTouchStart={(e) => startDrag(e.touches[0].clientX)}
          onTouchMove={(e) => dragStartedRef.current && updateDrag(e.touches[0].clientX - startXRef.current)}
          onTouchEnd={endDrag}
          onClickCapture={onClickCapture}
          style={{ cursor: dragStartedRef.current ? (isDraggingRef.current ? "grabbing" : "grab") : "grab", userSelect: "none" }}
        >
          {items.map((item) => (
            <button
              key={item}
              onClick={() => setSelected(item)}
              className={`flex px-5 md:h-13 h-10 w-auto items-center justify-center rounded-full group transition-all duration-200 hover:bg-[#666666b4] ${
                selected === item ? "bg-[#9e9e9ecc] text-white" : "bg-transparent"
              }`}
            >
              <div className="w-max text-[12px] lg:group-hover:text-white lg:group-focus:text-white font-sans">
                {item}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterContainer;
