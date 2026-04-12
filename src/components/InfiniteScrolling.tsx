import React from "react";
import Image from "next/image";

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
                        className={`${getImageSizeClasses(i)} relative mr-2 flex-shrink-0 rounded-sm cursor-pointer`}
                        onClick={() => openModal(img, `Photo ${i % images.length}`)}
                    >
                        <Image
                            src={img}
                            alt={`Photo ${i % images.length}`}
                            fill
                            sizes="(max-width: 640px) 320px, (max-width: 1024px) 240px, 640px"
                            loading="lazy"
                            className="rounded-sm object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteScrollRow;
