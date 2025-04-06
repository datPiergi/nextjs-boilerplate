"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface PhotoCarouselProps {
    images: string[];
    className?: string;
    id?: string;
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ images, className = "" , id}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const modalRef = useRef<HTMLDivElement>(null);

    const openModal = (index: number) => {
        setActiveIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        } else {
            document.removeEventListener("keydown", handleKeyDown);
        }

        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && e.target === modalRef.current) {
            closeModal();
        }
    };

    return (
        <div id={id} className={`w-full max-w-7xl mx-auto py-12 ${className}`}>
            <h2 className="w-full text-center font-serif italic text-3xl font-semibold text-[#8b8585] pb-8">The Story So Far...</h2>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 5 },
                }}
                navigation
                className="rounded-xl overflow-hidden"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-64 relative cursor-pointer" onClick={() => openModal(index)}>
                            <Image
                                src={src}
                                alt={`Foto ${index + 1}`}
                                fill style={{ objectFit: "cover" }}
                                className="rounded-lg"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {isOpen && (
                <div
                    ref={modalRef}
                    onClick={handleOverlayClick}
                    className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
                >
                    <div className="relative w-full max-w-4xl">
                        <Swiper
                            modules={[Navigation]}
                            navigation
                            initialSlide={activeIndex}
                        >
                            {images.map((src, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative w-full h-[80vh]">
                                        <Image
                                            src={src}
                                            alt={`Modal Foto ${index + 1}`}
                                            fill style={{ objectFit: "contain" }}
                                            className="rounded-lg"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PhotoCarousel;
