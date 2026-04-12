import {motion} from "framer-motion";
import Image from "next/image";
import React from "react";

const TrustedBySection = () => {
    const greenLogos = [
        {
            src: "/trusted/pepsi.webp",
            alt: "Pepsi Green",
        },
        {
            src: "/trusted/skoda.webp",
            alt: "Skoda Green",
        },
        {
            src: "/trusted/ted.webp",
            alt: "TEDx Green",
        },
        {
            src: "/trusted/tuborg.webp",
            alt: "Tuborg Green",
        },
        {
            src: "/trusted/adidas.webp",
            alt: "Adidas Green",
        },
        {
            src: "/trusted/unilever.webp",
            alt: "Unilever Green",
        },
        {
            src: "/trusted/ucl.webp",
            alt: "Champions League Green",
        },
        {
            src: "/trusted/coke.webp",
            alt: "Coke Logo Green",
        },
    ];

    // Create a duplicated array for seamless infinite scroll
    const duplicatedLogos = [...greenLogos, ...greenLogos];

    // Calculate the actual width needed for smooth infinite scroll
    const logoWidth = 160; // Approximate width including gaps (128px + 32px gap)
    const totalWidth = greenLogos.length * logoWidth;

    return (
        <section
            className="py-20  overflow-hidden"
            style={{ backgroundColor: "#F0F0F0" }}
        >
            <div className="max-w-7xl mx-auto px-8 text-center">
                <motion.h2
                    className="text-3xl sm:text-4xl lg:text-6xl mb-6 sm:mb-8 lg:mb-10 text-center"
                    style={{
                        fontFamily: "Staatliches",
                        fontSize: "clamp(28px, 8vw, 76px)",
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    TRUSTED BY GLOBAL BRANDS
                </motion.h2>

                <div className="relative">
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex items-center gap-8 md:gap-12 lg:gap-16 mt-4"
                            animate={{
                                x: [0, -totalWidth],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 30,
                                    ease: "linear",
                                },
                            }}
                            style={{
                                width: `${totalWidth * 2}px`,
                            }}
                        >
                            {duplicatedLogos.map((logo, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center justify-center flex-shrink-0"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={128}
                                        height={128}
                                        className="w-32 h-32 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Gradient overlays for smooth fade effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-lightGray to-transparent pointer-events-none z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-lightGray to-transparent pointer-events-none z-10"></div>
                </div>
            </div>
        </section>
    );
};


export default TrustedBySection;
