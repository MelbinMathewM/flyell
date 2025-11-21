import { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export type ItineraryItem = {
    day: string;
    location: string;
    title: string;
    image: string;
    description?: string;

    // old structure
    details?: { label: string; text?: string }[];

    // new structure
    arrival?: { label: string; text?: string };
    accommodation?: { label: string; place: string };
};

export function ItinerarySection({ data }: { data: { itinerary: ItineraryItem[] } }) {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const toggle = (idx: number) => setOpenIndex(idx);

    return (
        <section className="w-full bg-gray-50 py-12 px-12 flex justify-start">
            <div className="max-w-3xl w-full">

                <h3 className="text-3xl font-bold mb-6">Day-wise</h3>

                {/* Main Card */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {data.itinerary.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => toggle(i)}
                                className={`px-4 py-1 text-xs rounded-full transition border 
                                    bg-gray-200 text-gray-600 border-gray-200
                                `}
                            >
                                {item.day}
                            </button>
                        ))}
                    </div>
                    <div className="border-b border-gray-200 my-4"></div>

                    {/* Timeline Container */}
                    <div className="relative">
                        <div className="space-y-3 relative z-10 pl-14">
                            {/* Vertical Line */}
                            <div className="absolute left-[34px] top-1 bottom-0 w-[2px] bg-[#4997D3]"></div>
                            {data.itinerary.map((item, i) => {
                                const isOpen = i === openIndex;

                                return (
                                    <div key={i} className="relative">

                                        {/* Dot */}
                                        <div className="absolute -left-[27px] top-0.5 w-3 h-3 rounded-full border border-[#4997D3] bg-white text-[#4997D3] shadow-sm flex items-center justify-center p-0.5">
                                            <div className="w-1 h-1 bg-[#4997D3] rounded-full"></div>
                                        </div>


                                        {/* Day label */}
                                        <p className="text-[12px] text-[#4997D3] font-semibold tracking-widest mb-2">
                                            {item.day.toUpperCase()}
                                        </p>

                                        {/* Header row */}
                                        <div
                                            onClick={() => toggle(i)}
                                            className="flex items-start gap-4 ml-[30px] cursor-pointer"
                                        >
                                            <img
                                                src={item.image}
                                                className="w-20 h-20 rounded-lg object-cover"
                                            />

                                            <div className="flex-1">
                                                {/* Location */}
                                                <div className="flex items-center gap-2 mb-1">
                                                    <HiOutlineLocationMarker className="text-orange-500 text-lg" />
                                                    <span className="text-sm text-orange-600 font-medium">
                                                        {item.location}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <h4 className="font-semibold text-gray-900 text-xl">
                                                    {item.title}
                                                </h4>

                                                {/* Short description */}
                                                {item.description && (
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        {item.description}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Chevron */}
                                            <button className="text-gray-500">
                                                {isOpen ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
                                            </button>
                                        </div>

                                        {/* Expanded content */}
                                        {isOpen && (
                                            <div className="mt-4 ml-[33px] space-y-5">

                                                {/* NEW STRUCTURE: Arrival */}
                                                {item.arrival && (
                                                    <div>
                                                        <div className="flex items-start gap-2">
                                                            <span className="mt-2 h-2 w-2 rounded-full bg-gray-700"></span>

                                                            <div>
                                                                <p className="text-lg font-semibold text-gray-900">
                                                                    Arrival
                                                                </p>

                                                                <p className="text-md text-gray-600 mt-1">
                                                                    {item.arrival.text}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* NEW STRUCTURE: Accommodation */}
                                                {item.accommodation && (
                                                    <div className="flex items-start gap-1">
                                                        <HiOutlineLocationMarker className="text-gray-400 text-lg mt-0.5" />

                                                        <div>
                                                            <p className="text-sm font-semibold text-gray-400">
                                                                {item.accommodation.label}
                                                            </p>
                                                            <p className="text-md text-gray-600">
                                                                {item.accommodation.place}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* OLD STRUCTURE (fallback for other days) */}
                                                {item.details && item.details.length > 0 && (
                                                    <ul className="space-y-3 text-gray-700">
                                                        {item.details.map((d, idx) => (
                                                            <li key={idx} className="flex gap-3">
                                                                <span className="mt-1 h-2 w-2 rounded-full bg-gray-400"></span>
                                                                <div>
                                                                    <div className="text-sm font-medium">{d.label}</div>
                                                                    {d.text && (
                                                                        <div className="text-sm text-gray-600 mt-1">
                                                                            {d.text}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        )}
                                        <div className="border-b border-gray-200 mt-4"></div>
                                    </div>
                                );
                            })}
                        </div>

                        <p className="text-center text-gray-400 text-xs mt-10">
                            End of the trip
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
