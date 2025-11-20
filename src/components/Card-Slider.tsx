import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdAttachMoney } from "react-icons/md";

export default function CardSlider({ title, items }: {
    title: string;
    items: {
        img: string;
        title: string;
        packages: string;
        price: string;
    }[];
}) {

    const [index, setIndex] = useState(0);

    const next = () => {
        if (index < items.length - 3) {
            setIndex(index + 1);
        }
    };

    const prev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <section className="w-full max-w-6xl mx-auto py-12 px-4">

            {/* Heading */}
            <h2 className="text-3xl font-bold mb-10">{title}</h2>

            {/* CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {items.slice(index, index + 3).map((card, i) => (
                    <div
                        key={i}
                        className="w-full bg-white rounded-[22px] overflow-hidden shadow-md"
                    >
                        <div className="relative">
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-[230px] object-cover"
                            />

                            {/* Overlay bottom */}
                            <div className="absolute bottom-0 left-0 right-0 text-white p-4 rounded-b-[22px]">
                                <h3 className="font-semibold text-lg px-4">{card.title}</h3>

                                <div className="flex items-center text-sm px-4 mt-1 gap-3">

                                    {/* Packages */}
                                    <span className="flex items-center gap-1">
                                        <HiOutlineLocationMarker className="text-white text-lg" />
                                        {card.packages}
                                    </span>

                                    {/* Vertical Line */}
                                    <span className="h-4 w-px bg-white/50"></span>

                                    {/* Price */}
                                    <span className="flex items-center gap-1 text-white">
                                        <MdAttachMoney className="text-white text-base" />
                                        {card.price}
                                    </span>

                                </div>

                            </div>
                        </div>
                    </div>
                ))}

            </div>

            {/* ARROWS BELOW — RIGHT ALIGNED */}
            <div className="flex justify-end items-center gap-1 mt-6 pr-2">
                <button
                    onClick={prev}
                >
                    <BiChevronLeft size={22} className="text-gray-300 hover:text-gray-400"/>
                </button>

                <button
                    onClick={next}
                >
                    <BiChevronRight size={22} className="text-gray-300 hover:text-gray-400"/>
                </button>
            </div>

        </section>
    );
}
