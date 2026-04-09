"use client";

import { motion } from "framer-motion";
import { client } from "@/lib/sanity";
import { brandsQuery } from "@/lib/queries";
import { useEffect, useState } from "react";

const sizeMap = {
  small: "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16",
  medium: "w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20",
  large: "w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28",
};

const chunkLogosForMobile = (logos, chunkSize = 3) => {
  const chunks = [];
  for (let i = 0; i < logos.length; i += chunkSize) {
    chunks.push(logos.slice(i, i + chunkSize));
  }
  return chunks;
};

const BrandsAndArtistsSection = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    client.fetch(brandsQuery).then(setLogos);
  }, []);

  const mobileLogoRows = chunkLogosForMobile(logos, 3);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const LogoComponent = ({ logo, index }) => (
    <motion.div
      key={`${logo.name}-${index}`}
      className="flex items-center justify-center relative group cursor-pointer"
      variants={logoVariants}
      transition={{ duration: 0.3, delay: 0.05 * index }}
      whileHover={{ scale: 1.1 }}
    >
      {/* Default */}
      <img
        src={logo.logo}
        alt={logo.name}
        className={`
          object-contain transition-all duration-300
          ${logo.hoverLogo ? "group-hover:opacity-0" : ""}
          filter grayscale group-hover:grayscale-0
          ${sizeMap[logo.size] || sizeMap.medium}
        `}
        loading="lazy"
      />

      {/* Hover */}
      {logo.hoverLogo && (
        <img
          src={logo.hoverLogo}
          alt={`${logo.name} hover`}
          className={`
            absolute inset-0 object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300
            ${sizeMap[logo.size] || sizeMap.medium}
          `}
        />
      )}
    </motion.div>
  );

  return (
    <section
      style={{
        background: "linear-gradient(to bottom, white 132px, black 132px)",
      }}
    >
      <div className="max-w-full">
        {/* Title */}
        <motion.h2
          className="text-center px-4 mb-12"
          style={{
            fontFamily: "Staatliches",
            fontSize: "clamp(32px, 8vw, 76px)",
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          BRANDS & ARTISTS
        </motion.h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 lg:grid-cols-6 gap-10 px-8 lg:px-20 py-20 bg-black place-items-center">
          {logos.map((logo, index) => (
            <LogoComponent key={index} logo={logo} index={index} />
          ))}
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden bg-black px-4 py-12">
          {mobileLogoRows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="grid grid-cols-3 gap-6 mb-6 place-items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              {row.map((logo, index) => (
                <LogoComponent key={index} logo={logo} index={index} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsAndArtistsSection;