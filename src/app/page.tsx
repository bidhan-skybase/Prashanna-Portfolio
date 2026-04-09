"use client"
export const dynamic = 'force-dynamic'
import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";  // ← replaces useNavigate
import { ImageModal, useImageModal } from "../components/ImageModal";
import { VideoGallery } from "../components/VideoGallery";
import { COMMERCIAL_VIDEOS, AFTER_MOVIE_VIDEOS } from "../constants/videoData";
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Image from "next/image";


const galleryImages = [
  "/gallery/1.webp",
  "/gallery/2.webp",
  "/gallery/3.webp",
  "/gallery/4.webp",
  "/gallery/5.webp",
  "/gallery/6.webp",
  "/gallery/7.webp",
  "/gallery/8.webp",
  "/gallery/9.webp",
  "/gallery/10.webp",
  "/gallery/11.webp",
  "/gallery/12.webp",
  "/gallery/13.webp",
  "/gallery/14.webp",
  "/gallery/15.webp",
  "/gallery/16.webp",
  "/gallery/17.webp",
  "/gallery/18.webp",
  "/gallery/19.webp",
  "/gallery/20.webp",
  "/gallery/21.webp",
  "/gallery/22.webp",
  "/gallery/23.webp",
  "/gallery/24.webp",
  "/gallery/25.webp",
  "/gallery/26.webp",
  "/gallery/27.webp",
  "/gallery/28.webp",
  "/gallery/29.webp",
  "/gallery/30.webp",
];


const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const router = useRouter();
  const handleMoreWorksClick = () => {
    router.push("/works");
  };
  const videoId = "400OvNpY0FY";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 1. Static Placeholder - Shows immediately */}
      <div
        className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        style={{
          backgroundImage: `url('https://img.youtube.com/vi/${videoId}/maxresdefault.jpg')`
        }}
      />

      {/* 2. YouTube Video Background */}
      <div className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
        <iframe
          className="absolute top-1/2 left-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1`}
          allow="autoplay; fullscreen"
          onLoad={() => setIsVideoLoaded(true)}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 3. Hero Content */}
      <div className="relative z-10 mt-[34rem]">
        <button
          onClick={handleMoreWorksClick}
          className="px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition duration-300"
          style={{ fontFamily: "Helvetica Neue" }}
        >
          MORE WORKS
        </button>
      </div>
    </section>
  );
};


const CounterAnimation = ({ end, label }: { end: number; label: string }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div
        className="text-portfolio-dark-green font-regular text-6xl lg:text-8xl mb-2"
        style={{ fontFamily: "Staatliches" }}
      >
        {inView && <CountUp start={0} end={end} duration={2} />}+
      </div>
      <div
        className="text-gray-500 text-xl lg:text-2xl"
        style={{ fontFamily: "Staatliches" }}
      >
        {label}
      </div>
    </motion.div>
  );
};

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
                  In 2021, he co-founded{" "}
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

const PhotoGallery = ({
  openModal,
}: {
  openModal: (imageArray: string[], index: number) => void;
}) => {
  const handleOpenModal = (src: string, alt: string) => {
    const imageIndex = galleryImages.findIndex((img) => img === src);
    openModal(galleryImages, imageIndex);
  };

  const half = Math.ceil(galleryImages.length / 2);
  const firstHalf = galleryImages.slice(0, half);
  const secondHalf = galleryImages.slice(half);

  return (
    <section className="pt-0 bg-white overflow-hidden">
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
        PHOTOS / BRANDS VISUALS
      </motion.h2>

      <div className="w-full px-4 sm:px-8 lg:px-[5rem]">
        {/* Mobile: single row with all images */}
        <div className="block sm:hidden">
          <InfiniteScrollRow
            images={galleryImages}
            direction="ltr"
            openModal={handleOpenModal}
            isMobile={true}
          />
        </div>

        {/* Desktop: two rows with different halves */}
        <div className="hidden sm:block">
          <InfiniteScrollRow
            images={firstHalf}
            direction="ltr"
            openModal={handleOpenModal}
            isMobile={false}
          />
          <InfiniteScrollRow
            images={secondHalf}
            direction="rtl"
            openModal={handleOpenModal}
            isMobile={false}
          />
        </div>
      </div>
    </section>
  );
};


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

const ArtistNamesSection = () => {
  // Organized artist names by rows with alternating colors
  const artistRows = [
    [
      { name: "Alok", color: "text-black" },
      { name: "Arijit\nSingh", color: "text-gray-500" },
      { name: "Aastha\nGill", color: "text-black" },

      { name: "Anuv\nJain", color: "text-gray-500" },

      { name: "Atif\nAslam", color: "text-black" },
      { name: "Clean\nBandit", color: "text-gray-500" },
    ],
    [
      { name: "Diljit\nDosanjh", color: "text-gray-500" },
      { name: "Divine", color: "text-black" },
      { name: "Green\nDay", color: "text-gray-500" },
      { name: "King", color: "text-black" },
      { name: "Keep\n Hush", color: "text-gray-500" },
      { name: "Lollapalooza\nIndia", color: "text-black" },
      { name: "Louis\nTomlinson", color: "text-gray-500" },

      // { name: "Sajjan Raj Vaidya", color: "text-black" },
    ],
    [
      { name: "Manu\nChao", color: "text-gray-500" },
      { name: "Maroon\n5", color: "text-black" },
      { name: "Martin\nGarrix", color: "text-gray-500" },
      { name: "Prateek\nKuhad", color: "text-black" },
      { name: "Rishab Rikhiram\nSharma", color: "text-gray-500" },
      { name: "Shawn\nMendes", color: "text-black" },
      { name: "Neetesh\nJung Kunwar", color: "text-gray-500" },
    ],
    [
      { name: "Arthur\nGun", color: "text-black" },
      { name: "Sajjan Raj\n Vaidya", color: "text-gray-500" },
      { name: "Satish\n Ghalan", color: "text-black" },
      { name: "Sushant\nKC", color: "text-gray-500" },
      { name: "1974AD", color: "text-black" },
      { name: "Underside", color: "text-gray-500" },
      { name: "555", color: "text-black" },

      { name: "Yabesh Thapa", color: "text-gray-500" },
    ],
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="space-y-9">
          {artistRows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="flex justify-center items-center gap-6 lg:gap-12 flex-wrap"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: rowIndex * 0.2 }}
              viewport={{ once: true }}
            >
              {row.map((artist, index) => (
                <motion.div
                  key={`${rowIndex}-${index}`}
                  className={`text-lg text-center whitespace-pre-line ${artist.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  style={{ fontFamily: "Staatliches", fontSize: "24px" }}
                  transition={{
                    duration: 0.6,
                    delay: rowIndex * 0.2 + index * 0.05,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {artist.name}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Index() {
  const {
    isOpen,
    images,
    currentIndex,
    openModal,
    closeModal,
    navigateToImage,
  } = useImageModal();

  return (
    <div className="bg-white">
      <HeroSection />

      <TrustedBySection />
      <VideoGallery
        title="Commercials"
        videos={COMMERCIAL_VIDEOS}
        sectionId="commercials"
      />
      <PhotoGallery openModal={openModal} />
      <VideoGallery
        title="AFTER MOVIES"
        videos={AFTER_MOVIE_VIDEOS}
        sectionId="after-movies"
      />
      <BrandsAndArtistsSection />
      <ArtistNamesSection />
      <AboutSection />
      {/*<Footer />*/}

      <ImageModal
        isOpen={isOpen}
        onClose={closeModal}
        images={images}
        currentIndex={currentIndex}
        onNavigate={navigateToImage}
      />
    </div>
  );
}

const InfiniteScrollRow = ({
  images,
  direction,
  openModal,
  isMobile = false,
}: {
  images: string[];
  direction: "ltr" | "rtl";
  openModal: (src: string, alt: string) => void;
  isMobile?: boolean;
}) => {
  const [orientations, setOrientations] = useState<{
    [key: number]: "portrait" | "landscape";
  }>({});

  useEffect(() => {
    images.forEach((img, index) => {
      const image = new window.Image();
      image.src = img;
      image.onload = () => {
        const orientation =
          image.naturalHeight > image.naturalWidth ? "portrait" : "landscape";
        setOrientations((prev) => ({ ...prev, [index]: orientation }));
      };
    });
  }, [images]);

  const animationClass =
    direction === "ltr" ? "animate-scrollLtr" : "animate-scrollRtl";

  const getImageSizeClasses = (index: number) => {
    if (isMobile) {
      return "w-80 h-80 sm:w-40 sm:h-40";
    }
    const pattern = index % 3;
    if (pattern === 0) {
      return "w-60 h-60 md:w-80 md:h-60 lg:w-[40rem] lg:h-80";
    } else {
      return "w-48 h-48 md:w-60 md:h-60 lg:w-60 lg:h-80";
    }
  };

  return (
    <div className="overflow-hidden mb-2 w-full">
      <div
        className={`flex ${animationClass} pause-on-hover`}
        style={{ width: "max-content" }}
      >
        {[...images, ...images, ...images].map((img, i) => (
          <div
            key={i}
            className={`${getImageSizeClasses(i)} relative mr-2 flex-shrink-0 rounded-sm bg-black cursor-pointer`}
            onClick={() => openModal(img, `Photo ${i % images.length}`)}
          >
            <Image
              src={img}
              alt={`Photo ${i % images.length}`}
              fill
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 240px, 640px"
              loading="lazy"
              className={`rounded-sm ${orientations[i % images.length] === "portrait"
                ? "object-contain"
                : "object-cover"
                }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
