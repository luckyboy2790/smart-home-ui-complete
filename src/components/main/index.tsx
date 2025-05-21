import { Props } from "../../types";
import { useRef } from "react";

const DRAG_THRESHOLD = 5;

const Main = ({ children }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const dragStartedRef = useRef(false);
  const startYRef = useRef(0);
  const scrollTopRef = useRef(0);

  const startDrag = (y: number) => {
    dragStartedRef.current = true;
    isDraggingRef.current = false;
    startYRef.current = y;
    scrollTopRef.current = scrollRef.current?.scrollTop || 0;
  };

  const updateDrag = (dy: number) => {
    if (Math.abs(dy) > DRAG_THRESHOLD) {
      isDraggingRef.current = true;
    }
    if (isDraggingRef.current && scrollRef.current) {
      scrollRef.current.scrollTop = scrollTopRef.current - dy;
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
    <div
      ref={scrollRef}
      onMouseDown={(e) => startDrag(e.clientY)}
      onMouseMove={(e) =>
        dragStartedRef.current && updateDrag(e.clientY - startYRef.current)
      }
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchStart={(e) => startDrag(e.touches[0].clientY)}
      onTouchMove={(e) =>
        dragStartedRef.current &&
        updateDrag(e.touches[0].clientY - startYRef.current)
      }
      onTouchEnd={endDrag}
      onClickCapture={onClickCapture}
      className="min-w-full py-6 z-2 max-h-[calc(100vh-177px)] overflow-y-scroll row-start-2 justify-start flex flex-col md:col-start-2 col-start-1 backdrop-blur col-span-full text-xl h-screen px-8 bg-[#4854638c] rounded-xl"
      style={{
        cursor: dragStartedRef.current
          ? isDraggingRef.current
            ? "grabbing"
            : "grab"
          : "grab",
        userSelect: "none",
      }}
    >
      {children}
    </div>
  );
};

Main.Container = function mainContainer({ children }: Props) {
  return <div className="w-full gap-4">{children}</div>;
};

export default Main;
