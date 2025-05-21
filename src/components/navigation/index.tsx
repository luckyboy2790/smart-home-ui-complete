import React, { useRef, useState } from "react";
import { Props } from "../../types";

const DRAG_THRESHOLD = 5; // px
const CLICK_DURATION_THRESHOLD = 300; // ms

const Navigation = ({ children }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const dragStartedRef = useRef(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const dragStartTimeRef = useRef(0);
  const dragDistanceRef = useRef(0);

  const startDrag = (y: number) => {
    dragStartedRef.current = true;
    isDraggingRef.current = false;
    setStartY(y);
    dragStartTimeRef.current = Date.now();
    dragDistanceRef.current = 0;
    setScrollTop(scrollRef.current ? scrollRef.current.scrollTop : 0);
  };

  const updateDrag = (dy: number) => {
    dragDistanceRef.current = Math.abs(dy);
    if (dragDistanceRef.current > DRAG_THRESHOLD) {
      isDraggingRef.current = true;
    }
    if (isDraggingRef.current && scrollRef.current) {
      scrollRef.current.scrollTop = scrollTop - dy;
    }
  };

  const endDrag = () => {
    dragStartedRef.current = false;
  };

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => startDrag(e.clientY);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragStartedRef.current) return;
    updateDrag(e.clientY - startY);
  };

  const onMouseUp = () => endDrag();
  const onMouseLeave = () => endDrag();

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => startDrag(e.touches[0].clientY);

  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragStartedRef.current) return;
    updateDrag(e.touches[0].clientY - startY);
  };

  const onTouchEnd = () => endDrag();

  // Click capture to block accidental clicks after drag
  const onClickCapture = (e: React.MouseEvent) => {
    const duration = Date.now() - dragStartTimeRef.current;
    if (isDraggingRef.current || dragDistanceRef.current > DRAG_THRESHOLD || duration > CLICK_DURATION_THRESHOLD) {
      e.preventDefault();
      e.stopPropagation();
      isDraggingRef.current = false;
    }
  };

  return (
    <div className="row-start-1 h-15 col-span-full">
      <div className="fixed md:top-0 top-6 max-[767px]:left-0 md:h-screen md:w-auto w-screen flex flex-col justify-center items-center">
        <div
          ref={scrollRef}
          className="z-10 md:w-17 md:max-h-1/2 w-4/5 max-h-14 p-2 rounded-[10000px] overflow-y-scroll justify-center backdrop-blur bg-[#2e2e2ea8] shadow-sm shadow-gray-400 select-none"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onClickCapture={onClickCapture}
          style={{
            cursor: dragStartedRef.current ? (isDraggingRef.current ? "grabbing" : "grab") : "grab",
            userSelect: "none"
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

Navigation.Nav = function NavigationNav({ children }: Props) {
  return (
    <ul className="w-full flex md:justify-center justify-start gap-3 md:flex-col flex-row">
      {children}
    </ul>
  );
};

Navigation.NavItem = function NavigationNavItem({ children }: Props) {
  return <li className="flex justify-center items-center">{children}</li>;
};

export default Navigation;