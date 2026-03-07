import { useRef } from "react";
import { gsap } from "gsap";
import { useEffect } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);
  const shouldDisableCursor =
    typeof window === "undefined" ||
    window.matchMedia("(max-width: 1024px), (hover: none), (pointer: coarse), (prefers-reduced-motion: reduce)")
      .matches;

  useEffect(() => {
    if (shouldDisableCursor) return undefined;

    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;
    if (!cursor || !cursorBorder) return undefined;

    gsap.set([cursor, cursorBorder], {
      xPercent: -50,
      yPercent: -50,
      autoAlpha: 0,
    });

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3.out" });

    const xToBorder = gsap.quickTo(cursorBorder, "x", { duration: 0.5, ease: "power3.out" });
    const yToBorder = gsap.quickTo(cursorBorder, "y", { duration: 0.5, ease: "power3.out" });

    const handleMouseMove = (event) => {
      if (cursor.style.opacity !== "1") {
        gsap.to([cursor, cursorBorder], { autoAlpha: 1, duration: 0.2 });
      }

      xTo(event.clientX);
      yTo(event.clientY);
      xToBorder(event.clientX);
      yToBorder(event.clientY);
    };

    const handleMouseDown = () => {
      gsap.to([cursor, cursorBorder], {
        scale: 0.7,
        duration: 0.15,
      });
    };

    const handleMouseUp = () => {
      gsap.to([cursor, cursorBorder], {
        scale: 1,
        duration: 0.15,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [shouldDisableCursor]);

  if (shouldDisableCursor) {
    return null;
  }

  return (
  <>
     <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-[20px] h-[20px]
        bg-white rounded-full pointer-events-none z-[999]
        mix-blend-difference" />
      <div 
         ref={cursorBorderRef}
      className="fixed top-0 left-0 w-[40px] h-[40px]
      border rounded-full border-white pointer-events-none z-[999]
      mix-blend-difference opacity-50"/>
  </>
  );
};

export default CustomCursor;