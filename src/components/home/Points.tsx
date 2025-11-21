import { FiSmile, FiFlag, FiClock } from "react-icons/fi";
import { GiForestCamp } from "react-icons/gi";

export default function WhyChooseUsSection() {
    const features = [
        {
            icon: <FiSmile size={56} className="text-[#4997D3]" />,
            title: "Customer Delight",
            desc: "We deliver the best service and experience for our customer."
        },
        {
            icon: <GiForestCamp size={56} className="text-[#4997D3]" />,
            title: "Authentic Adventure",
            desc: "We deliver the real adventure experience for our dear customer."
        },
        {
            icon: <FiFlag size={56} className="text-[#4997D3]" />,
            title: "Expert Guides",
            desc: "We deliver only expert tour guides for our dear customer."
        },
        {
            icon: <FiClock size={56} className="text-[#4997D3]" />,
            title: "Time Flexibility",
            desc: "We welcome time flexibility of traveling for our dear customer."
        }
    ];

    return (
        <section className="relative w-full py-24 px-6">

            {/* Background Image with overlay */}
            <div className="absolute inset-0">
                <img
                    src="/points.jpg"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

                {features.map((f, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                        <div className="mb-10">
                            {f.icon}
                        </div>

                        <h4 className="font-semibold text-xl text-gray-800 mb-2">
                            {f.title}
                        </h4>

                        <p className="text-gray-600 text-md leading-relaxed max-w-[180px]">
                            {f.desc}
                        </p>
                    </div>
                ))}

            </div>
        </section>
    );
}
