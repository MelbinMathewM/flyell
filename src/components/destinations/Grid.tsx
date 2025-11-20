import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdAttachMoney } from "react-icons/md";

export default function DestinationsGrid({ items }: { items : any }) {
    const categories = ["All", "Asia", "Africa", "Europe", "America", "Australia", "Other"];
    const [active, setActive] = useState("All");
    const [search, setSearch] = useState("");

    // FILTER + SEARCH
    const filtered = items.filter((item: any) => {
        const matchCategory = active === "All" || item.category === active;
        const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
        return matchCategory && matchSearch;
    });

    return (
        <section className="w-full max-w-6xl mx-auto px-4 py-16">

            {/* Top Filter Row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-4">

                <h3 className="text-lg font-bold mb-6">
                    DESTINATIONS ({filtered.length})
                </h3>


                {/* Search */}
                <div className="relative w-60">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="px-4 py-2 w-full rounded-md shadow-sm outline-none 
                   focus:ring-2 focus:ring-blue-400 pr-10 placeholder-gray-800"
                    />

                    {/* Search Icon */}
                    <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
                </div>

            </div>

            <div className="flex flex-wrap gap-3 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition
                                ${active === cat
                                ? "bg-blue-400 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }
                            `}
                    >
                        {cat}
                    </button>
                ))}
            </div>


            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((item: any, i: any) => (
                    <div
                        key={i}
                        className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer"
                    >
                        {/* Image */}
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 flex flex-col justify-end">

                            <h3 className="text-white font-semibold text-lg mb-1">
                                {item.title}
                            </h3>

                            <div className="flex items-center justify-between text-white text-sm">

                                {/* Packages */}
                                <span className="flex items-center gap-1">
                                    <HiOutlineLocationMarker className="text-white text-lg" />
                                    {item.packages}
                                </span>

                                {/* Price */}
                                <span className="flex items-center gap-1">
                                    <MdAttachMoney className="text-white" />
                                    {item.price}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
