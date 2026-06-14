'use client'

import {motion} from "framer-motion";
import Image from "next/image";
import React from "react";
import {urlFor} from "@/lib/sanity";
import {BrandRow, LogoEntry} from "@/lib/types";

const containerVariants = {
    hidden: {opacity: 0, y: 30},
    visible: {opacity: 1, y: 0},
};

const logoVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0},
};

const getSizeClasses = (customSize?: string) => {
    if (!customSize)
        return "w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20";
    if (customSize.includes("w-30") || customSize.includes("w-32"))
        return "w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28";
    if (customSize.includes("w-28"))
        return "w-14 h-14 sm:w-18 sm:h-18 md:w-18 md:h-18 lg:w-22 lg:h-22 xl:w-24 xl:h-24";
    if (customSize.includes("w-20"))
        return "w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20";
    if (customSize.includes("w-18"))
        return "w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18";
    if (customSize.includes("w-16"))
        return "w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16";
    return "w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20";
};

const LogoComponent = ({
                           logo,
                           index,
                       }: {
    logo: LogoEntry;
    index: number;
}) => {
    const sizeClasses = getSizeClasses(logo.customSizeClass);
    const bwSrc = urlFor(logo.bwImage).width(200).url();
    const colorSrc = logo.colorImage ? urlFor(logo.colorImage).width(200).url() : null;

    return (
        <motion.div
            className={`relative flex items-center justify-center group cursor-pointer flex-shrink-0 ${sizeClasses}`}
            variants={logoVariants}
            transition={{duration: 0.3, delay: 0.1 + (index % 3) * 0.1}}
            whileHover={{scale: 1.1}}
        >
            <Image
                src={bwSrc}
                alt={logo.alt}
                fill
                sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, (max-width: 1280px) 80px, 112px"
                className={`object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0 ${
                    colorSrc ? "group-hover:opacity-0" : ""
                }`}
                loading="lazy"
            />
            {colorSrc && (
                <Image
                    src={colorSrc}
                    alt={`${logo.alt} colour`}
                    fill
                    sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, (max-width: 1280px) 80px, 112px"
                    className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                />
            )}
        </motion.div>
    );
};

const DesktopLogoGrid = ({
                             logos,
                             rowIndex,
                             isLastRow,
                         }: {
    logos: LogoEntry[];
    rowIndex: number;
    isLastRow: boolean;
}) => (
    <motion.div
        className={`hidden md:flex justify-center items-center gap-6 lg:gap-12 xl:gap-20 flex-wrap ${
            isLastRow ? "" : "mb-8 lg:mb-12"
        }`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.8, delay: 0.4 + rowIndex * 0.2}}
        viewport={{once: true}}
    >
        {logos.map((logo, index) => (
            <LogoComponent key={`desktop-${logo._key}`} logo={logo} index={index}/>
        ))}
    </motion.div>
);

const MobileLogoGrid = ({logoRows}: { logoRows: LogoEntry[][] }) => (
    <div className="md:hidden">
        {logoRows.map((row, rowIndex) => (
            <motion.div
                key={`mobile-row-${rowIndex}`}
                className={`grid grid-cols-3 gap-4 place-items-center ${
                    rowIndex < logoRows.length - 1 ? "mb-6" : ""
                }`}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                transition={{duration: 0.8, delay: 0.4 + rowIndex * 0.2}}
                viewport={{once: true}}
            >
                {row.map((logo, index) => (
                    <LogoComponent key={`mobile-${logo._key}`} logo={logo} index={index}/>
                ))}
            </motion.div>
        ))}
    </div>
);
const BrandsAndArtistsSection = ({rows}: { rows: BrandRow[] }) => {
    if (!rows || rows.length === 0) return null;

    const allLogos = rows.flatMap(row => row.logos);

    const chunkLogosForMobile = (logos: LogoEntry[], chunkSize = 3) => {
        const chunks: LogoEntry[][] = [];
        for (let i = 0; i < logos.length; i += chunkSize) {
            chunks.push(logos.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const mobileLogoRows = chunkLogosForMobile(allLogos, 3);

    return (
        <section
        id="brands"
            style={{
                background: "linear-gradient(to bottom, white 132px, black 132px)",
            }}
        >
            <div className="max-w-full">
                <motion.h2
                    className="text-3xl sm:text-4xl lg:text-6xl mb-8 sm:mb-12 lg:mb-16 text-center px-4"
                    style={{
                        fontFamily: "Staatliches",
                        fontSize: "clamp(32px, 8vw, 76px)",
                    }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                >
                    BRANDS & ARTISTS
                </motion.h2>

                <div className="bg-black px-4 sm:px-6 md:px-8 lg:px-20 py-12 sm:py-16 lg:py-20">
                    <div className="max-w-6xl mx-auto">
                        {rows.map((row, rowIndex) => (
                            <DesktopLogoGrid
                                key={row._id}
                                logos={row.logos}
                                rowIndex={rowIndex}
                                isLastRow={rowIndex === rows.length - 1}
                            />
                        ))}
                        <MobileLogoGrid logoRows={mobileLogoRows}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandsAndArtistsSection;
