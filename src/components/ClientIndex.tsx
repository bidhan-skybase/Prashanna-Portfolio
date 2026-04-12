'use client'

import {BrandRow, ArtistRow} from '@/lib/types'
import HeroSection from "@/components/Sections/HeroSection";
import TrustedBySection from './Sections/TrustedBySection';
import {VideoGallery} from './VideoGallery';
import {AFTER_MOVIE_VIDEOS, COMMERCIAL_VIDEOS} from "@/constants/videoData";
import PhotoGallery from "@/components/Sections/PhotoGallerySection";
import ArtistNamesSection from "@/components/Sections/ArtistNameSection";
import BrandsAndArtistsSection from "@/components/Sections/BrandAndArtistSection";
import AboutSection from './Sections/AboutSection';
import {ImageModal, useImageModal} from "@/components/ImageModal";

interface Props {
    brandRows: BrandRow[]
    artistRows: ArtistRow[]
}


export default function ClientIndex({brandRows, artistRows}: Props) {
    const {isOpen, images, currentIndex, openModal, closeModal, navigateToImage} = useImageModal()
    console.log(artistRows)
    return (
        <div className="bg-white">
            <HeroSection/>
            <TrustedBySection/>
            <VideoGallery title="Commercials" videos={COMMERCIAL_VIDEOS} sectionId="commercials"/>
            <PhotoGallery openModal={openModal}/>
            <VideoGallery title="AFTER MOVIES" videos={AFTER_MOVIE_VIDEOS} sectionId="after-movies"/>
            <BrandsAndArtistsSection rows={brandRows}/> {/* ← confirm this is here */}
            <ArtistNamesSection rows={artistRows}/>
            <AboutSection/>
            <ImageModal
                isOpen={isOpen}
                onClose={closeModal}
                images={images}
                currentIndex={currentIndex}
                onNavigate={navigateToImage}
            />
        </div>
    )
}
