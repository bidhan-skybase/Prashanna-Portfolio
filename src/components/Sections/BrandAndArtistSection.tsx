import {motion} from "framer-motion";
import Image from "next/image";
import React from "react";

const BrandsAndArtistsSection = () => {
    const logoData = [
        // Row 1
        [
            { src: "/logos/pepsi bw.png", hoverSrc: "/logos/pepsi c.png", alt: "Pepsi", customSize: "w-16 h-16" },
            { src: "/logos/coke bnw.png", hoverSrc: "/logos/coko color.png", alt: "Coca Cola" },
            { src: "/logos/adidas bw.png", hoverSrc: "/logos/adidas c.png", alt: "Adidas", customSize: "w-18 h-20" },
            { src: "/logos/Ueaf bnw.png", hoverSrc: "/logos/Ueaf c.png", alt: "Champions League", customSize: "w-20 h-20" },
            { src: "/logos/tedx bw.png", hoverSrc: "/logos/tedx c.png", alt: "TEDx" },
            { src: "/logos/expo bw.png", hoverSrc: "/logos/expo c.png", alt: "Expo City Dubai" },
            { src: "/logos/yale bw.png", hoverSrc: "/logos/yale c.png", alt: "Yale University", customSize: "w-30 h-32" },
        ],
        // Row 2
        [
            { src: "/logos/Unilever bw.png", hoverSrc: "/logos/Unilever c.png", alt: "Unilever" },
            { src: "/logos/samsung bw.png", hoverSrc: "/logos/samsung c.png", alt: "Samsung" },
            { src: "/logos/tuborg bnw.png", hoverSrc: "/logos/tuborg c.png", alt: "Tuborg" },
            { src: "/logos/coke_bw.png", hoverSrc: "/logos/coke.png", alt: "Coke Studio", customSize: "w-16 h-16" },
            { src: "/logos/Lolla bw.png", hoverSrc: "/logos/lolla c.png", alt: "Lollapaloza", customSize: "w-28 h-32" },
            { src: "/logos/titan bw.png", hoverSrc: "/logos/titan c.png", alt: "Titan" },
            { src: "/logos/sios bw.png", hoverSrc: "/logos/sios c.png", alt: "SOS" },
        ],
        // Row 3
        [
            { src: "/logos/skoda bnw.png", hoverSrc: "/logos/skoda color.png", alt: "Skoda" },
            { src: "/logos/yamaha bw.png", hoverSrc: "/logos/yamaha c.png", alt: "Yamaha" },
            { src: "/logos/Changan bnw.png", hoverSrc: "/logos/Changan c.png", alt: "Changan", customSize: "w-32 h-32" },
            { src: "/logos/foton bw.png", hoverSrc: "/logos/foton c.png", alt: "Foton" },
            { src: "/logos/Seres bw.png", hoverSrc: "/logos/seres c.png", alt: "Seres", customSize: "w-16 h-16" },
            { src: "/logos/niu bw.png", hoverSrc: "/logos/niu color.png", alt: "Niu" },
            { src: "/logos/believe bnw.png", hoverSrc: "/logos/believe c.png", alt: "Believe" },
        ],
        // Row 4
        [
            { src: "/logos/ntb bw.png", hoverSrc: "/logos/ntb c.png", alt: "Nepal Tourism Board" },
            { src: "/logos/kmg bw.png", hoverSrc: "/logos/kmg c.png", alt: "KMG", customSize: "w-16 h-16" },
            { src: "/logos/MLN bw.png", hoverSrc: "/logos/MLN c.png", alt: "Mountain Lodge of Nepal" },
            { src: "/logos/GB bnw.png", hoverSrc: "/logos/gb c.png", alt: "Gorkha Brewery", customSize: "w-32 h-32" },
            { src: "/logos/Ruslan bw.png", hoverSrc: "/logos/Ruslan c.png", alt: "Ruslan" },
            { src: "/logos/m4n bw.png", hoverSrc: "/logos/m4n c.png", alt: "Metal for Nepal" },
            { src: "/logos/khalti bw.png", hoverSrc: "/logos/khalti bw c.png", alt: "Khalti" },
        ],
        // Row 5
        [
            { src: "/logos/michelin_bw.png", hoverSrc: "/logos/michelin.png", alt: "Michelin" },
            { src: "/logos/dav bnw.png", hoverSrc: "/logos/dav c.png", alt: "DAV" },
            { src: "/logos/cf bw.png", hoverSrc: "/logos/cf c.png", alt: "Crossfire", customSize: "w-32 h-32" },
            { src: "/logos/yatri bw.png", hoverSrc: "/logos/yatri c.png", alt: "Yatri" },
            { src: "/logos/jb_bw.png", hoverSrc: "/logos/jb.png", alt: "Janakpur Bolts" },
        ],
    ];

    const allLogos = logoData.flat();

    const chunkLogosForMobile = (logos: typeof allLogos, chunkSize = 3) => {
        const chunks = [];
        for (let i = 0; i < logos.length; i += chunkSize) {
            chunks.push(logos.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const mobileLogoRows = chunkLogosForMobile(allLogos, 3);

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    const logoVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
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
        logo: (typeof allLogos)[0];
        index: number;
    }) => {
        const sizeClasses = getSizeClasses(logo.customSize);

        return (
            <motion.div
                className={`relative flex items-center justify-center group cursor-pointer flex-shrink-0 ${sizeClasses}`}
                variants={logoVariants}
                transition={{ duration: 0.3, delay: 0.1 + (index % 3) * 0.1 }}
                whileHover={{ scale: 1.1 }}
            >
                <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, (max-width: 1280px) 80px, 112px"
                    className={`object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0 ${
                        logo.hoverSrc ? "group-hover:opacity-0" : ""
                    }`}
                    loading="lazy"
                />

                {logo.hoverSrc && (
                    <Image
                        src={logo.hoverSrc}
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
        logos: (typeof allLogos);
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
            transition={{ duration: 0.8, delay: 0.4 + rowIndex * 0.2 }}
            viewport={{ once: true }}
        >
            {logos.map((logo, index) => (
                <LogoComponent key={`desktop-${logo.alt}-${index}`} logo={logo} index={index} />
            ))}
        </motion.div>
    );

    const MobileLogoGrid = ({ logoRows }: { logoRows: (typeof allLogos)[] }) => (
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
                    transition={{ duration: 0.8, delay: 0.4 + rowIndex * 0.2 }}
                    viewport={{ once: true }}
                >
                    {row.map((logo, index) => (
                        <LogoComponent key={`mobile-${logo.alt}-${index}`} logo={logo} index={index} />
                    ))}
                </motion.div>
            ))}
        </div>
    );

    return (
        <section
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
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    BRANDS & ARTISTS
                </motion.h2>

                <div className="bg-black px-4 sm:px-6 md:px-8 lg:px-20 py-12 sm:py-16 lg:py-20">
                    <div className="max-w-6xl mx-auto">
                        {logoData.map((row, rowIndex) => (
                            <DesktopLogoGrid
                                key={`desktop-${rowIndex}`}
                                logos={row}
                                rowIndex={rowIndex}
                                isLastRow={rowIndex === logoData.length - 1}
                            />
                        ))}
                        <MobileLogoGrid logoRows={mobileLogoRows} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandsAndArtistsSection

