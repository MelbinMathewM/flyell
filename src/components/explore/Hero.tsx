import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FiCalendar, FiUser, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";

type PackageHeroProps = {
    data: {
        name: string;
        description: string;
        mainImage: string;
        images: string[];
    };
};

export function PackageHero({ data }: PackageHeroProps) {
    const [selected, setSelected] = useState<string>(data.mainImage);

    return (
        <section className="w-full bg-gray-50 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">

                {/* LEFT — MAIN IMAGE + THUMBNAILS */}
                <div className="col-span-2">
                    {/* MAIN IMAGE */}
                    <Link to={"/destinations"} className="flex w-15 items-center text-gray-300 hover:text-gray-400 mb-8 ms-12">
                        <BiArrowBack />
                        Back
                    </Link>
                    <img
                        src={selected}
                        className="w-full h-[50vh] object-cover rounded-xl shadow-md transition-all duration-300"
                    />

                    {/* THUMBNAILS */}
                    <div className="flex gap-4 mt-4">
                        {data.images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                onClick={() => setSelected(img)}
                                className={`w-49 h-25 object-cover rounded-lg cursor-pointer border-2 
                                    transition-all duration-200 
                                    ${selected === img ? "border-[#4997D3]" : "border-transparent hover:opacity-80"}
                                `}
                            />
                        ))}
                    </div>
                </div>

                {/* RIGHT — FORM ONLY */}
                <div className="col-span-2">
                    <h2 className="text-3xl font-bold mb-2">{data.name}</h2>
                    <p className="text-gray-600 text-md mb-4">{data.description}</p>
                    <form className="w-100 bg-white shadow-lg rounded-2xl p-6 space-y-4">

                        {/* Title */}
                        <p className="text-gray-700 font-semibold leading-tight">
                            Customise your trip with someone who has been to <span className="font-semibold">{data.name}</span>
                        </p>

                        {/* INPUT – Full Name */}
                        <div className="relative">
                            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                            <input
                                type="text"
                                placeholder="Full name"
                                className="w-full bg-gray-100 pl-12 pr-4 py-3 rounded-full outline-none text-sm placeholder-gray-400"
                            />
                        </div>

                        {/* INPUT – Travellers */}
                        <div className="relative">
                            <FiUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                            <input
                                type="number"
                                placeholder="No. of travelers"
                                className="w-full bg-gray-100 pl-12 pr-4 py-3 rounded-full outline-none text-sm placeholder-gray-400"
                            />
                        </div>

                        {/* INPUT – Date */}
                        <div className="relative">
                            <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                            <input
                                type="text"
                                placeholder="Date of travel"
                                className="w-full bg-gray-100 pl-12 pr-4 py-3 rounded-full outline-none text-sm placeholder-gray-400"
                            />
                        </div>

                        <hr className="text-gray-200"/>

                        {/* Price Section */}
                        <div className="mt-2">
                            <p className="text-xs text-gray-500">Starting from</p>
                            <p className="text-[#4997D3] font-semibold text-xl">₹ 32,500 <span className="text-gray-600 text-sm">per person</span></p>
                        </div>

                        {/* BUTTON */}
                        <button className="w-full bg-[#4997D3] text-white py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-blue-600 transition">
                            PLAN WITH AN EXPERT
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}
