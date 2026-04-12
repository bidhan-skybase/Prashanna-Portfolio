import {motion} from "framer-motion";
import React from "react";
import InfiniteScrollRow from "@/components/InfiniteScrolling";

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

export default PhotoGallery;
