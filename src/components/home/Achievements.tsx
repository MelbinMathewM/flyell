import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { LaurelStarIcon } from "../icons/Laurel-Star";
import { RibbonStarIcon } from "../icons/Ribbon-Star";
import { TrophyIcon } from "../icons/Trophy";




export function AchievementsSlider({ items }: { items: any }) {
    const [index, setIndex] = useState(1);

    const next = () => setIndex((i) => (i + 1) % items.length);
    const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

    // calculate visible items
    const left = items[(index - 1 + items.length) % items.length];
    const center = items[index];
    const right = items[(index + 1) % items.length];

    const visible = [left, center, right];

    return (
        <section className="w-full py-12 px-6">
            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold tracking-wider">ACHIEVEMENTS</h2>
                <p className="text-gray-600 mt-1 text-md">
                    We are recognized for exceptional travel services.
                </p>
            </div>

            <div className="relative max-w-6xl mx-auto flex items-center justify-center">

                {/* LEFT ARROW */}
                <button
                    onClick={prev}
                    className="cursor-pointer hidden sm:flex absolute left-0 z-20 p-2 text-gray-300 hover:text-gray-400 transition"
                >
                    <BiChevronLeft size={30} />
                </button>

                {/* CARDS */}
                <div className="flex justify-center items-start gap-14 relative">

                    {visible.map((item, i) => {
                        const isCenter = i === 1;

                        return (
                            <div
                                key={i}
                                className={`flex flex-col items-center text-center transition-all duration-500 mb-8
                    ${isCenter
                                        ? "w-[280px] h-[300px] bg-[#4997D3] text-white rounded-2xl shadow-md p-8 z-10"
                                        : "w-[260px] h-[300px] text-gray-700 opacity-80 translate-y-36 z-0"
                                    }
                `}
                            >

                                {/* Center card icon */}
                                {isCenter && (
                                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6">
                                        <div className="text-[#4997D3] text-4xl">{item.icon}</div>
                                    </div>
                                )}

                                {/* Side card icon */}
                                {!isCenter && (
                                    <div className="text-[#4997D3] text-4xl mb-4">{item.icon}</div>
                                )}

                                {/* Title */}
                                <h3 className={`text-xl font-semibold ${isCenter ? "text-white" : "text-gray-900"}`}>
                                    {item.title}
                                </h3>

                                {/* Subtitle */}
                                <p className={`mt-1 text-md ${isCenter ? "text-white/90" : "text-gray-500"}`}>
                                    {item.subtitle}
                                </p>

                                {/* Country */}
                                <p className={`text-md ${isCenter ? "text-white/90" : "text-gray-400"}`}>
                                    {item.country}
                                </p>

                            </div>
                        );
                    })}

                </div>


                {/* RIGHT ARROW */}
                <button
                    onClick={next}
                    className="cursor-pointer hidden sm:flex absolute right-0 z-20 p-2 text-gray-300 hover:text-gray-400 transition"
                >
                    <BiChevronRight size={30} />
                </button>

            </div>
        </section>
    );
}



const achievements = [
    {
        icon: <RibbonStarIcon size={80} color="#4997D3" />,
        title: "TripAdvisor",
        subtitle: "Certificate of Excellence 2021",
        country: "Australia"
    },
    {
        icon: <LaurelStarIcon size={90} color="#4997D3" />,
        title: "Travel + Leisure",
        subtitle: "World’s Best Tour Operator 2022",
        country: "United States of America"
    },
    {
        icon: <TrophyIcon size={80} color="#4997D3" />,
        title: "World Travel Award",
        subtitle: "Best Travel Agency 2023",
        country: "United Kingdom"
    }
];

export default function AchievementsSection() {
    return (
        <AchievementsSlider items={achievements} />
    )
}
