import React, {useState} from "react";
import {useRouter} from "next/navigation";

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
            <div
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'
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
                    style={{fontFamily: "Helvetica Neue"}}
                >
                    MORE WORKS
                </button>
            </div>
        </section>
    );
};
export default HeroSection;
