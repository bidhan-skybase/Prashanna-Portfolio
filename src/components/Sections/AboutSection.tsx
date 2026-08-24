import {motion} from "framer-motion";
import React from "react";
import CounterAnimation from "@/components/CounterAnimation";

const AboutSection = () => {
    return (
        <section id="about" className="bg-white relative overflow-hidden">
            {/* Content with padding */}
            <div className="pt-12">
                <div className="max-w-8xl mx-auto px-4 sm:px-8 md:px-16 lg:px-31">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-15 items-start">
                        {/* Left column - Text content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="py-12 pl-4 sm:pl-8 md:pl-20 lg:pl-30"
                        >
                            <h3
                                className="text-portfolio-dark-green font-medium text-3xl sm:text-4xl lg:text-6xl mb-4"
                                style={{
                                    fontFamily: "Staatliches",
                                    fontSize: "clamp(58px, 8vw, 96px)",
                                    wordSpacing: "0.3em",
                                    lineHeight: 1, // 👈 tighter line height
                                }}
                            >
                                PRASHANNA BAJRACHARYA
                            </h3>
                            <h1
                                className="text-portfolio-brown-red font-medium mb-4 mt-0"
                                style={{
                                    fontSize: "1.3rem",
                                    fontFamily: '"Helvetica Neue", Arial, sans-serif',
                                }}
                            >
                                PRODUCER | DIRECTOR | PHOTOGRAPHER | EDITOR
                            </h1>
                            <div
                                style={{ display: "flex", flexDirection: "column", gap: 12 }}
                                className="pb-6"
                            >
                                <p
                                    className="text-gray-800 leading-relaxed tracking-wider"
                                    style={{
                                        fontSize: "clamp(21px, 1.2vw, 34px)",
                                        fontFamily: '"Helvetica Neue", Arial, sans-serif',
                                        letterSpacing: "0.05em",
                                    }}
                                >
                                    Prashanna Bajracharya is a self-taught photographer,
                                    filmmaker, and creative entrepreneur from Kathmandu. He has
                                    worked with 150+ brands on campaigns, documentaries,
                                    editorials, and events blending artistry with impact. Beyond
                                    commercial work, he is deeply immersed in music festival
                                    photography and videography, capturing the raw energy of live
                                    performances and turning moments into lasting visual
                                    experiences.
                                </p>

                                <p
                                    className="text-gray-800 leading-relaxed tracking-wide"
                                    style={{
                                        fontSize: "clamp(21px, 1.2vw, 30px)",
                                        fontFamily: '"Helvetica Neue", Arial, sans-serif',
                                    }}
                                >
                                    In 2021, he founded{" "}
                                    <a
                                        href="https://www.instagram.com/untitled.np?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text hover:underline font-bold"
                                    >
                                        untitled.np
                                    </a>
                                    , a collective of visual storytellers redefining Nepal’s media
                                    landscape. Built on collaboration and innovation, they craft
                                    visuals that inspire, resonate, and elevate brands beyond
                                    labels.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-16">
                                <CounterAnimation end={6} label="Years Experience" />
                                <CounterAnimation end={100} label="Projects" />
                            </div>
                        </motion.div>

                        {/* Right column - Image that extends to bottom */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative lg:h-full"
                        >
                            {/* Image container that extends beyond the padded area */}
                            <div className="lg:absolute lg:inset-0 lg:flex lg:items-end">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1713fc3a7af5a183f21190184819cb26c784935?width=1739"
                                    alt="Prashanna Bajracharya"
                                    className="w-full h-auto lg:h-full lg:object-cover lg:object-top rounded-lg lg:rounded-none"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default AboutSection;
