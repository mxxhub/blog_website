"use client";

import { useEffect, useRef } from "react";
import { getObserver } from "@/utils/observer";
import HomeSection from "@/components/pages/home/HomeSection";
import DigitalSection from "@/components/pages/home/DigitalSection";
import ServicesSection from "@/components/pages/home/ServicesSection";
import TechnologiesSection from "@/components/pages/home/TechnologiesSection";

export default function HomePage() {
  const servicesRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = getObserver();
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

    setTimeout(() => {
      if (window.location.hash === "#services" && servicesRef.current) {
        window.scrollTo({
          top: servicesRef.current.offsetTop,
          behavior: "smooth",
        });
      }
    }, 500);
  }, []);

  return (
    <>
      {/* Home Section */}
      <HomeSection />

      {/* Digital Potential section */}
      <DigitalSection />

      {/* Services section */}
      <ServicesSection servicesRef={servicesRef} />

      {/* Cutting-Edge Technologies Section */}
      <TechnologiesSection />
    </>
  );
}
