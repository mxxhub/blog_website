"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [pathname, setPathName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const routes = [
    { name: "Home", path: "/home" },
    { name: "Services", path: "/home#services" },
    { name: "Contact", path: "/contact" },
    { name: "Signup", path: "/signup" },
    { name: "Signin", path: "/signin" },
    // { name: "Accessibility", path: "/accessibility" },
    // { name: "Legal", path: "/legal" },
  ];

  const handleNavbarClick = (path: string) => {
    setPathName(path);
    setIsOpen(false); // Close mobile menu on click
  };

  useEffect(() => {
    setPathName(path + window.location.hash);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        {/* Mobile Navbar (Hamburger Menu) */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="lg:hidden">
              <Menu className="!w-12 !h-12" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="navbar-modal">
            <div className="navbar-mobile">
              {routes.map(({ name, path }) => (
                <Link
                  key={path}
                  href={path}
                  target={path === "/home#services" ? "_blank" : "_self"}
                  onClick={() => handleNavbarClick(path)}
                  passHref
                >
                  <p
                    className={`nav-link ${pathname === path ? "active" : ""}`}
                  >
                    {name}
                  </p>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <div className="logo-container fade-up">
          <Link href={"/home"} passHref>
            <Image src="/logo1.png" alt="logo" width={137} height={88} />
          </Link>
        </div>

        {/* Desktop Navbar */}
        <nav className="navbar fade-up">
          {routes.slice(0, 5).map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              target={path === "/home#services" ? "_blank" : "_self"}
              onClick={() => handleNavbarClick(path)}
              passHref
            >
              <p className={`nav-link ${pathname === path ? "active" : ""}`}>
                {name}
              </p>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
