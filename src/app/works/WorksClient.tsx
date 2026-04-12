"use client"

import {ImageModal} from "@/components/ImageModal";
import {VideoModal} from "@/components/VideoModal";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";

const AllWorks = () => {
    const [activeFilter, setActiveFilter] = useState("Show all");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videoTitles, setVideoTitles] = useState({});

    const useImageModal = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [images, setImages] = useState([]);
        const [currentIndex, setCurrentIndex] = useState(0);

        const openModal = (src, alt, allImages = []) => {
            setImages(allImages);
            const index = allImages.findIndex((img) => img === src);
            setCurrentIndex(index >= 0 ? index : 0);
            setIsOpen(true);
        };

        const closeModal = () => {
            setIsOpen(false);
            setImages([]);
            setCurrentIndex(0);
        };

        const navigateToImage = (index) => {
            setCurrentIndex(index);
        };

        return {isOpen, images, currentIndex, openModal, closeModal, navigateToImage};
    };



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


    const projects = [
        {
            id: "test",
            category: "test",
            url: "https://www.youtube.com/watch?v=400OvNpY0FY&feature=youtu.be",
        },
        {
            id: "doc_1",
            category: "Documentaries",
            url: "https://www.youtube.com/watch?v=y7BtAkW5LKA",
        },
        {
            id: "doc_2",
            category: "Documentaries",
            url: "https://www.youtube.com/watch?v=kexCWZSRx7Q",
        },
        {
            id: "doc_3",
            category: "Documentaries",
            url: "https://www.youtube.com/watch?v=Nylgt4CtsKo",
        },
        {
            id: "doc_4",
            category: "Documentaries",
            url: "https://youtu.be/IUigcSW0lfo?si=fNmP7fUCsIFwYH4M",
        },
        {
            id: "doc_5",
            category: "Documentaries",
            url: "https://youtu.be/D5PdEPD6O14?si=7qT9yJw4dPJtdr61",
        },
        {
            id: "doc_6",
            category: "Documentaries",
            url: "https://youtu.be/NOqkE2YJtkY?si=z3ZbqE7y_sQ-l5e8",
        },
        {
            id: "doc_7",
            category: "Documentaries",
            url: "https://youtu.be/lGPeTb37_LQ?si=0JQYkxk6kcT69kL2",
        },
        {
            id: "comm_1",
            category: "Commercials",
            url: "https://www.youtube.com/watch?v=1zX82HUC3MQ",
        },
        {
            id: "comm_2",
            category: "Commercials",
            url: "https://www.youtube.com/watch?v=S7DRJNuYrhs",
        },
        {
            id: "comm_3",
            category: "Commercials",
            url: "https://youtu.be/pjCOsZZPB3c",
        },
        {
            id: "comm_4",
            category: "Commercials",
            url: "https://youtu.be/ZmxUV8x5Bt4",
        },
        {
            id: "comm_5",
            category: "Commercials",
            url: "https://youtu.be/tI--w9k7P0g",
        },
        {
            id: "comm_6",
            category: "Commercials",
            url: "https://youtu.be/AlRhi6xPrHc",
        },
        {
            id: "comm_7",
            category: "Commercials",
            url: "https://youtu.be/uzTDHZ4qpeY",
        },
        {
            id: "comm_9",
            category: "Commercials",
            url: "https://www.youtube.com/watch?v=81D9H2Z3Vcw",
        },
        {
            id: "comm_10",
            category: "Commercials",
            url: "https://youtu.be/ierR4wtomT4",
        },
        {
            id: "comm_12",
            category: "Commercials",
            url: "https://youtu.be/BSYZS1LjSnQ",
        },

        {
            id: "comm_14",
            category: "Commercials",
            url: "https://youtu.be/b7bkdI_WXyw",
        },
        {
            id: "comm_15",
            category: "Commercials",
            url: "https://youtu.be/q-KMYchnYa0",
        },
        {
            id: "music_1",
            category: "Music Videos",
            url: "https://youtu.be/81DnLf00zqQ?si=Tb4iJ5mfa3m_nQoq",
        },
        {
            id: "music_2",
            category: "Music Videos",
            url: "https://youtu.be/hoH7zG0oLLE?si=9paoNyplyZWdY-4O",
        },
        {
            id: "music_3",
            category: "Music Videos",
            url: "https://youtu.be/t-3QiJuBshA?si=yJ8Yy4tJ7H-NJhzo",
        },
        {
            id: "music_4",
            category: "Music Videos",
            url: "https://youtu.be/wnXwSoNfs6k?si=hKiG9EraJmqGN7Ga",
        },
        {
            id: "music_5",
            category: "Music Videos",
            url: "https://youtu.be/0-he4Uc9zE8?si=uLr2RgwZoht_SjCq",
        },
        {
            id: "music_6",
            category: "Music Videos",
            url: "https://youtu.be/lvWnomkTiVY?si=QwnVf5NrZiXNhIJb",
        },
        {
            id: "music_7",
            category: "Music Videos",
            url: "https://youtu.be/ttpO7wNqFv8?si=RkUXV2hwH7hj8zil",
        },
        {
            id: "music_8",
            category: "Music Videos",
            url: "https://youtu.be/E2lK1VsaMFQ?si=Khiy_a-b8InySJj6",
        },
        {
            id: "music_9",
            category: "Music Videos",
            url: "https://youtu.be/0TgIVnPb7_g?si=7aijuxQOvPaUtrJ4",
        },
        {
            id: "music_10",
            category: "Music Videos",
            url: "https://youtu.be/Z4noW1s4Ekk?si=R-bmQim-HmjUs8Ny",
        },
        {
            id: "music_11",
            category: "Music Videos",
            url: "https://youtu.be/RtIuL9Y4BR0?si=RnJdEAfPLaCrjPKF",
        },
        {
            id: "music_12",
            category: "Music Videos",
            url: "https://youtu.be/ybYVD_IkVdE?si=sc5NEE24egWeZtct",
        },
        {
            id: "after_1",
            category: "After Movies",
            url: "https://youtu.be/LXQGcVf3lr8",
            thumbnail: '/thumbnails/aftermovie.jpg'
        },
        {
            id: "after_20",
            category: "After Movies",
            url: "https://youtu.be/m8BX-viWnoc?si=sktxXaAt5dHX2EJ0",
        },
        {
            id: "after_2",
            category: "After Movies",
            url: "https://youtu.be/mWnv5-lHahE",
        },
        {
            id: "after_3",
            category: "After Movies",
            url: "https://www.youtube.com/watch?v=ufDpfhmHYOU",
        },

        {
            id: "after_5",
            category: "After Movies",
            url: "https://www.youtube.com/watch?v=3ds0YWrpWg4",
        },
        {
            id: "after_11",
            category: "After Movies",
            url: "https://youtu.be/qSi4w7M8fCU",
        },
        {
            id: "after_6",
            category: "After Movies",
            url: "https://youtu.be/Hv5vemaX38s",
        },
        {
            id: "after_7",
            category: "After Movies",
            url: "https://youtube.com/shorts/-pLE1BWjkts?feature=share",
        },
        {
            id: "after_8",
            category: "After Movies",
            url: "https://youtube.com/shorts/bA67RJLcqpo?feature=share",
        },
        {
            id: "after_9",
            category: "After Movies",
            url: "https://youtu.be/YFLiMUbvTNI",
        },
        {
            id: "after_10",
            category: "After Movies",
            url: "https://youtu.be/aOMeS_aGfn8",
        },
    ];


    useEffect(() => {
        const fetchTitles = async () => {
            const titles = {};
            for (const project of projects) {
                const videoId = extractVideoId(project.url);
                if (videoId) {
                    const title = await fetchYouTubeTitle(videoId);
                    titles[project.id] = title;
                }
            }
            setVideoTitles(titles);
        };
        fetchTitles();
    }, []);

    const filters = [
        "Show all",
        "Commercials",
        "Music Videos",
        "Documentaries",
        "After Movies",
        "Photography",
    ];

    const isYouTubeShort = (url) => {
        return url.includes("/shorts/") || url.includes("youtube.com/shorts");
    };

    const extractVideoId = (url) => {
        const patterns = [
            /(?:youtube\.com\/watch\?v=)([^&\n?#]+)/,
            /(?:youtu\.be\/)([^&\n?#]+)/,
            /(?:youtube\.com\/embed\/)([^&\n?#]+)/,
            /(?:youtube\.com\/shorts\/)([^&\n?#]+)/,
        ];
        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match) return match[1].split("?")[0];
        }
        return null;
    };

    const fetchYouTubeTitle = async (videoId) => {
        try {
            const response = await fetch(
                `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
            );
            const data = await response.json();
            return data.title;
        } catch (error) {
            return "Video Title";
        }
    };

    const filteredProjects =
        activeFilter === "Show all"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    const openModal = (project) => {
        const videoId = extractVideoId(project.url);
        setSelectedVideo({
            id: videoId,
            title: videoTitles[project.id] || "Video Title",
            platform: "youtube",
            url: project.url,
        });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedVideo(null);
    };

    const {
        isOpen: isImageModalOpen,
        images: modalImages,
        currentIndex,
        openModal: openImageModal,
        closeModal: closeImageModal,
        navigateToImage,
    } = useImageModal();

    const VideoThumbnail = ({project}) => {
        const [thumbnailError, setThumbnailError] = useState(false);

        const videoId = extractVideoId(project.url);
        const isShort = isYouTubeShort(project.url);

        if (thumbnailError) {
            return (
                <div
                    className="relative overflow-hidden rounded-lg bg-gradient-to-br from-red-500 to-red-700 aspect-[16/9]">
                    <div className="w-full h-full flex flex-col items-center justify-center text-white p-4">
                        <div className="bg-white bg-opacity-20 rounded-full p-4 mb-4">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <h4 className="text-sm font-semibold text-center mb-2">
                            {videoTitles[project.id] || "YouTube Video"}
                        </h4>
                        {isShort && (
                            <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">SHORTS</span>
                        )}
                    </div>
                </div>
            );
        }

        return (
            <div className={`relative overflow-hidden rounded-lg ${isShort ? "aspect-[9/16]" : "aspect-[16/9]"}`}>
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&playsinline=1`}
                    className="w-full h-full"
                    style={{pointerEvents: "none"}}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={videoTitles[project.id] || "Video"}
                    onError={() => setThumbnailError(true)}
                />
                {isShort && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded z-10">
                        SHORTS
                    </div>
                )}
                <div
                    className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex flex-col justify-end p-4">
                    <div
                        className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                        <h3 className="text-white text-lg font-semibold mb-2" style={{fontFamily: "Staatliches"}}>
                            {videoTitles[project.id] || "Loading..."}
                        </h3>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-white pt-12">
            {/* Header */}
            <div className="px-6 md:px-12 lg:px-20 py-0 pt-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
                        <motion.div
                            className="w-full lg:w-1/2"
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8}}
                        >
                            <h1
                                className="font-bold text-black leading-none"
                                style={{
                                    fontFamily: "Staatliches",
                                    fontSize: "clamp(60px, 12vw, 220px)",
                                    lineHeight: 1,
                                }}
                            >
                                Projects
                            </h1>
                        </motion.div>
                        <motion.div
                            className="lg:w-1/2 lg:pt-00"
                            initial={{opacity: 0, x: 50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8, delay: 0.2}}
                        />
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="px-6 md:px-12 lg:px-20 pb-0">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="mb-8"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.4}}
                    >
                        <div className="flex flex-wrap gap-3">
                            {filters.map((filter, index) => (
                                <motion.button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-4 py-2 rounded-full border transition-all duration-200 text-sm ${
                                        activeFilter === filter
                                            ? "bg-black text-white border-black"
                                            : "bg-white text-gray-700 border-gray-300 hover:border-gray-500"
                                    }`}
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.3, delay: 0.5 + index * 0.05}}
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                >
                                    {filter}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Grid */}
            <div className="px-6 md:px-12 lg:px-20 pb-20">
                <div className="max-w-7xl mx-auto">

                    {/* Photography — Masonry */}
                    {activeFilter === "Photography" ? (
                        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
                            {galleryImages.map((image, index) => (
                                <motion.div
                                    key={`image_${index}`}
                                    className="group cursor-pointer relative mb-3 break-inside-avoid"
                                    initial={{opacity: 0, y: 40}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.6, delay: index * 0.03}}
                                    whileHover={{scale: 1.02}}
                                    onClick={() => openImageModal(image, `Gallery image ${index + 1}`, galleryImages)}
                                >
                                    <div className="relative overflow-hidden rounded-lg">
                                        <img
                                            src={image}
                                            alt={`Gallery image ${index + 1}`}
                                            loading="lazy"
                                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = "/placeholder.jpg";
                                            }}
                                        />
                                        <div
                                            className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300"/>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    ) : (
                        /* Videos — regular grid */
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                            key={activeFilter}
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                        >
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    className="group cursor-pointer relative"
                                    initial={{opacity: 0, y: 40}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.6, delay: index * 0.1}}
                                    whileHover={{scale: 1.02}}
                                    onClick={() => openModal(project)}
                                >
                                    <VideoThumbnail project={project}/>
                                </motion.div>
                            ))}

                            {filteredProjects.length === 0 && (
                                <motion.div
                                    className="col-span-full text-center py-20"
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.5}}
                                >
                                    <p className="text-gray-500 text-lg">No projects found for this filter.</p>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </div>

                <ImageModal
                    isOpen={isImageModalOpen}
                    onClose={closeImageModal}
                    images={modalImages}
                    currentIndex={currentIndex}
                    onNavigate={navigateToImage}
                />
            </div>

            <VideoModal isOpen={isModalOpen} video={selectedVideo} onClose={closeModal}/>
        </div>
    );
};

export default AllWorks;

