import { useState } from "react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

export default function TestimonialsSection() {
    const testimonials = [
        {
            text: "I recently booked a trip to Italy with Flyell, and I couldn't be happier with the experience. From the initial consultation to the post-trip follow-up, everything was handled with the utmost professionalism and care. Our itinerary was perfectly tailored to our interests, and we had an amazing time exploring the country. I would highly recommend Flyell to anyone looking for a stress-free and unforgettable travel experience.",
            name: "Sarah Johnson",
            role: "Client from United States of America",
            avatar: "/author-1.png",
        },
        {
            text: "Our family trip was absolutely incredible. Flyell took care of every detail and ensured we had the best accommodations and experiences throughout. One of our best vacations ever!",
            name: "David Miller",
            role: "Client from United Kingdom",
            avatar: "/author-1.png",
        },
        {
            text: "The perfect travel experience! Very professional team and well-planned itinerary. Everything was smooth, enjoyable, and memorable. I’ll definitely travel with Flyell again!",
            name: "Sophia Lee",
            role: "Client from Singapore",
            avatar: "/author-1.png",
        },
    ];

    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % testimonials.length);
    const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

    const t = testimonials[index];

    return (
        <section className="w-full py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">

                {/* LEFT SIDE TEXT */}
                <div className="flex flex-col w-2/5 justify-between h-full">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">TESTIMONIALS</h2>
                        <p className="text-gray-600">What our clients love about us.</p>
                    </div>

                    {/* Arrows at the bottom-left */}
                    <div className="flex flex-col text-gray-500 mt-10 md:mt-40">
                        <button onClick={prev} className="text-gray-300 hover:text-gray-400 transition">
                            <BiChevronUp size={28} />
                        </button>
                        <button onClick={next} className="text-gray-300 hover:text-gray-400 transition">
                            <BiChevronDown size={28} />
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE CARD */}
                <div className="relative w-full md:w-3/5">

                    {/* Decorative absolute image (dummy) */}
                    <img
                        src="/testimonial-image-2.png"
                        alt="pattern"
                        className="absolute -left-18 -bottom-4 w-24 h-24 z-0"
                    />

                    {/* White Card */}
                    <div className="relative bg-white rounded-2xl shadow-lg p-10 z-10">

                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                            {t.text}
                        </p>

                        {/* USER INFO */}
                        <div className="flex items-center gap-4 mt-6">
                            <img
                                src={t.avatar}
                                alt={t.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                                <p className="text-sm text-gray-500">{t.role}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
