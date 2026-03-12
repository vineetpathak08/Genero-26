"use client";
import About from "@/components/About/About";
import Faq from "@/components/Faq/Faq";
import Hero from "@/components/Hero/Hero";
// import LinkButton from "@/components/LinkButton/LinkButton";
import PastEvents from "../components/PastEvents/PastEvents";

import MobileCarousel from "@/components/MobileCorousel/MobileCarousel";
import ScratchTicket from "@/components/ScratchTicket";
import TextMask from "@/components/TextMask/TextMask";
import ZoomParallax from "@/components/ZoomParallax/page";
import { useScroll } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import PastGenero from "@/components/PastGenero";
// import Break from "@/components/Break";
//import MobileCorousel from "@/components/mobileCorousel/page";

export default function Home() {
  const container = useRef();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false, // Disable on mobile for better performance
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Cleanup to prevent memory leaks
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });
  return (
    // <DistortionEffect/>

    <div>
      <div ref={container} className="  relative h-[200vh]">
        <Hero scrollYProgress={scrollYProgress} />
        <About scrollYProgress={scrollYProgress} />
      </div>
      {/* <Break/> */}
      <ZoomParallax />
      {/* <PastEvents /> */}
      {/* <PastGenero/> */}
      {/* <Break/> */}
      <MobileCarousel />
      <TextMask />
      {/* <CountDown/> */}
      <Faq />
      <ScratchTicket />
      {/* <Ticket /> */}
    </div>
  );
}
