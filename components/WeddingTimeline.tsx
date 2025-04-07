"use client";

import React from "react";
import SectionTitle from "./SectionTitle";
import SocialTags from "./SocialTags";

interface TimelineStep {
    time: string;
    description: string;
    subtitle?: string;
    text?: string;
}

interface TimelineBlock {
    steps: TimelineStep[];
    mapLink?: string;
    image?: string;
}

interface WeddingTimelineProps {
    className?: string;
}

const timeline: TimelineBlock[] = [
    {
        steps: [
            { time: "16:00 - 17:30", description: "CERIMONIA", subtitle: "Chiesa di San Matteo", text: "Via dei Perroni 29, Lecce" },
        ],
        mapLink:
            "https://maps.app.goo.gl/Shci9SD6MTiKsg53A",
        image: "/church.jpg",
    },
    {
        steps: [
            { time: "18:00 - 19:30", description: "COCKTAIL DI BENVENUTO" },
            { time: "Dalle 20:00", description: "RICEVIMENTO", subtitle: "Tenuta Lucagiovanni", text: "S.P. 361, km 4200 - Scorrano (LE)" },
        ],
        mapLink:
            "https://maps.app.goo.gl/PtdugFz26cLunMmc6",
        image: "/location.JPG",
    },
];

const WeddingTimeline: React.FC<WeddingTimelineProps> = ({ className = "" }) => {
    return (
        <div className={`w-full max-w-6xl mx-auto px-4 sm:px-8 text-xl sm:text-2xl border-y border-[#c4c4c4] ${className}`}>
            {timeline.map((block, blockIdx) => (
                <div key={blockIdx} className={`mb-10 ${blockIdx > 0 ? "border-t border-[#c4c4c4] pt-12" : "pt-12"}`}>

                    <div>
                        {block.steps.map((step, stepIdx) => (
                            <div key={stepIdx} className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start py-4 text-center sm:text-left">
                                <span className="text-2xl sm:text-3xl text-center text-sm-end sm:pr-4">{step.time}</span>
                                <div className="text-sm-start">
                                    <p className="text-xl sm:text-2xl mb-0">{step.description}</p>
                                    {step.subtitle && (
                                        <div className="text-base sm:text-lg mb-1 mt-4">{step.subtitle}</div>
                                    )}
                                    {step.text && (
                                        <div className="text-base sm:text-lg mb-1">{step.text}</div>
                                    )}
                                    {block.image && stepIdx === block.steps.length - 1 && (
                                        <div className="w-full sm:w-98 rounded-lg overflow-hidden my-4">
                                            <img src={block.image} alt="" className="w-98 h-48 sm:h-64 object-cover" />
                                        </div>
                                    )}
                                    {stepIdx === block.steps.length - 1 && block.mapLink && (step.subtitle || step.text) && (
                                        <div className="mt-4">
                                            <a
                                                href={block.mapLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ textDecoration: 'none', color: '#8b8585' }}
                                                className="px-4 py-2 bg-[#ece9e5] rounded-md shadow hover:bg-[#e5dfda] transition"
                                            >
                                                Come arrivarci
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            ))}
            <SectionTitle className="col-span-full text-base sm:text-xl mb-8"><span className="italic">DRESS CODE</span> : ELEGANTE</SectionTitle>
            <SocialTags className="col-span-full mb-8" />
        </div>
    );
};

export default WeddingTimeline;
