"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      className={`scroll-top-button ${isVisible ? "show" : "hide"}`}
      onClick={scrollToTop}
    ></Button>
  );
}
