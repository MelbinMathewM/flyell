import { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export type ItineraryItem = {
    day: string;
    location: string;
    title: string;
    image: string;
    description: string;
    details?: { label: string; text?: string }[];
};

export function ItinerarySection({ data }: { data: { itinerary: ItineraryItem[] } }) {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const toggle = (idx: number) => setOpenIndex(idx);

    return (
        <section className="w-full bg-gray-50 py-12 px-8">
            <h3 className="text-4xl font-bold mb-4">Day-wise</h3>

            {/* Main Card */}
            <div className="bg-white p-6 rounded-xl shadow max-w-2xl">

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {data.itinerary.map((item, i) => (
                        <button
                            key={i}
                            onClick={() => toggle(i)}
                            className={`px-4 py-1 text-xs rounded-full border transition 
                                bg-gray-200 text-gray-800 border-gray-200
                            `}
                        >
                            {item.day}
                        </button>
                    ))}
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-blue-300"></div>

                    <div className="space-y-10 pl-10 relative z-10">
                        {data.itinerary.map((item, i) => {
                            const isOpen = i === openIndex;

                            return (
                                <div key={i}>

                                    {/* Dot */}
                                    <div className="absolute -left-[7px] mt-1 w-3 h-3 rounded-full bg-blue-500"></div>

                                    {/* Day Label */}
                                    <p className="text-xs text-[#8AA3B0] font-semibold tracking-wider mb-2">
                                        {item.day.toUpperCase()}
                                    </p>

                                    {/* Header Row */}
                                    <div
                                        onClick={() => toggle(i)}
                                        className="flex items-start gap-4 cursor-pointer"
                                    >
                                        <img
                                            src={item.image}
                                            className="w-20 h-20 rounded-lg object-cover"
                                        />

                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <HiOutlineLocationMarker className="text-orange-500 text-lg" />
                                                <span className="text-xs text-orange-600 font-medium">
                                                    {item.location}
                                                </span>
                                            </div>

                                            <h4 className="font-semibold text-gray-900">{item.title}</h4>

                                            {item.description && (
                                                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                                            )}
                                        </div>

                                        {/* Chevron */}
                                        <button className="text-gray-500">
                                            {isOpen ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
                                        </button>
                                    </div>

                                    {/* Expanded Section */}
                                    {isOpen && item.details && item.details.length > 0 && (
                                        <div className="mt-4 ml-[84px]">
                                            <ul className="space-y-3 text-gray-700">
                                                {item.details.map((d, idx) => (
                                                    <li key={idx} className="flex gap-3">
                                                        <span className="mt-1 h-2 w-2 bg-gray-400 rounded-full" />
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
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* End of Trip */}
                    <p className="text-center text-gray-400 text-xs mt-10">
                        End of the trip
                    </p>
                </div>
            </div>
        </section>
    );
}
