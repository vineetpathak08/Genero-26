"use client";
import { useEffect, useRef } from "react";
import styles from "./textMask.module.css";
// import Break from "../Break";

export default function TextMask() {
  const container = useRef(null);
  const stickyMask = useRef(null);
  const animationFrameId = useRef(null);

  const initialMaskSize = 0.8;
  const targetMaskSize = 145;

  useEffect(() => {
    const animate = () => {
      if (!stickyMask.current || !container.current) return;

      const maskSizeProgress = targetMaskSize * getScrollProgress();
      const maskSizeValue = (initialMaskSize + maskSizeProgress) * 100 + "%";
      stickyMask.current.style.webkitMaskSize = maskSizeValue;
      stickyMask.current.style.maskSize = maskSizeValue;
      animationFrameId.current = requestAnimationFrame(animate);
    };

    const getScrollProgress = () => {
      if (!stickyMask?.current || !container?.current) return 0;
      const scrollProgress =
        stickyMask.current.offsetTop /
        (container.current.getBoundingClientRect().height - window.innerHeight);
      return scrollProgress;
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <main>
      <div id="thisyear" ref={container} className={styles.container}>
        <div ref={stickyMask} className={styles.stickyMask}>
          <video autoPlay muted loop>
            <source src="/media/genero25.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </main>
  );
}
