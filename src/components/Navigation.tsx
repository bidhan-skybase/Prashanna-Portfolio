"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavigationProps {
  BgColor?: string;
}

const Navigation = ({ BgColor }: NavigationProps) => {
  const pathname = usePathname();

  const navItems = [
    { name: "ABOUT", path: "/#about" },
    { name: "SERVICES", path: "/services" },
    { name: "WORKS", path: "/works" },
    { name: "CONTACT", path: "/#contact" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* ---------------- SCROLL EFFECT ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- LOCK BODY SCROLL ---------------- */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          BgColor
            ? ""
            : scrolled
            ? "bg-portfolio-dark-green backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        style={{ backgroundColor: BgColor || undefined }}
      >
        <div className="max-w-8xl mx-auto px-6 py-5">

          {/* ================= DESKTOP ================= */}
          <div className="hidden md:grid grid-cols-5 items-center text-center">

            {/* LEFT ITEMS */}
            <LinkItem item={navItems[0]} onClick={handleNavClick} />
            <LinkItem item={navItems[1]} onClick={handleNavClick} />

            {/* CENTER LOGO */}
            <div className="flex justify-center">
              <Link href="/">
                <img
                  src="/untitled.png"
                  alt="Logo"
                  className="h-10 object-contain"
                />
              </Link>
            </div>

            {/* RIGHT ITEMS */}
            <LinkItem item={navItems[2]} onClick={handleNavClick} />
            <LinkItem item={navItems[3]} onClick={handleNavClick} />

          </div>

          {/* ================= MOBILE ================= */}
          <div className="flex md:hidden justify-between items-center">

            <Link href="/">
              <img src="/untitled.png" className="h-9" />
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              <div className="space-y-1">
                <span
                  className={`block w-6 h-[2px] bg-white transition ${
                    isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-[2px] bg-white transition ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-[2px] bg-white transition ${
                    isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <motion.div
        className={`fixed inset-0 bg-portfolio-dark-green z-40 md:hidden flex flex-col justify-center items-center ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isMenuOpen ? 1 : 0,
              y: isMenuOpen ? 0 : 20,
            }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={item.path}
              onClick={handleNavClick}
              className="text-white text-5xl block py-4"
              style={{ fontFamily: "Staatliches" }}
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

/* ================= NAV ITEM COMPONENT ================= */

const LinkItem = ({
  item,
  onClick,
}: {
  item: { name: string; path: string };
  onClick: () => void;
}) => (
  <Link
    href={item.path}
    onClick={onClick}
    className="text-white hover:text-gray-300 transition"
    style={{
      fontFamily: "Staatliches",
      letterSpacing: "0.05em",
fontSize: "clamp(1.1rem, 1.5vw, 1.5rem)",    }}
  >
    {item.name}
  </Link>
);

export default Navigation;